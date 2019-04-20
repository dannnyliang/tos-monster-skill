import React, { Suspense } from 'react';
import pipe from 'lodash/fp/pipe';
import prop from 'lodash/fp/prop';
import filter from 'lodash/fp/filter';
import isEmpty from 'lodash/isEmpty';

import { FILTERS, labelToId } from '../constant';

const MonsterCard = React.lazy(() => import('./MonsterCard'));

const filterMonsters = (filters, monsters) => {
  const curryFilter = (rawPropName, filterGroupId) =>
    filter(monster => {
      const monsterProp = prop([rawPropName], monster);
      const filterGroup = prop([filterGroupId], filters);
      if (isEmpty(filterGroup)) return true;
      return filterGroup.includes(labelToId(filterGroupId, monsterProp));
    });

  const filterPipe = pipe(
    curryFilter(FILTERS.RACES.rawPropName, FILTERS.RACES.id),
    curryFilter(FILTERS.STARS.rawPropName, FILTERS.STARS.id),
    curryFilter(FILTERS.ATTRIBUTES.rawPropName, FILTERS.ATTRIBUTES.id),
  );

  return filterPipe(monsters);
};

function MonsterList(props) {
  const { monsters, filters } = props;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* TODO: Pagination */}
      {filterMonsters(filters, monsters).map(monster => (
        <div key={monster.monsterId} className="my-3">
          <MonsterCard monster={monster} />
        </div>
      ))}
    </Suspense>
  );
}

export default MonsterList;
