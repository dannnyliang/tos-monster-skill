import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { propTypes as monsterTypes } from './MonsterCard';

const MonsterCard = React.lazy(() => import('./MonsterCard'));

function MonsterList(props) {
  const { slicedMonsters } = props;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {slicedMonsters.map(monster => (
        <div key={monster.monsterId} className="my-3">
          <MonsterCard monster={monster} />
        </div>
      ))}
    </Suspense>
  );
}

MonsterList.propTypes = {
  slicedMonsters: PropTypes.arrayOf(PropTypes.shape(monsterTypes)),
};

export default MonsterList;
