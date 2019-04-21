import React, {Suspense} from 'react';

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

export default MonsterList;
