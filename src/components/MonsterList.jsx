import React, { useContext, Suspense } from 'react';

import { MonstersContext } from '../App';
const MonsterCard = React.lazy(() => import('./MonsterCard'));

function MonsterList() {
  const { monsters } = useContext(MonstersContext);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {monsters.map(monster => (
        <div key={monster.monsterId} className="my-3">
          <MonsterCard monster={monster} />
        </div>
      ))}
    </Suspense>
  );
}

export default MonsterList;
