const fs = require('fs');

const pipe = require('lodash/fp/pipe');
const map = require('lodash/fp/map');
const each = require('lodash/fp/each');
const filter = require('lodash/fp/filter');
const pick = require('lodash/fp/pick');
const set = require('lodash/fp/set');
const sortBy = require('lodash/fp/sortBy');

const mutateSkills = require('./utils/mutateSkills');

// const sample = {
//   monsterName: '誅滅戰劍 · 費雷',
//   activeName: '汪洋神號',
//   activeDescription:
//     '水符石轉化為水神族強化符石，同時火及心符石轉化為水強化符石',
//   monsterId: 2001,
//   leaderName: '浪濤 ‧ 極致',
//   leaderDescription:
//     '隊伍中只有水屬性成員時：全隊攻擊力 6 倍，生命力及回復力 1.2 倍；消除神族符石時，全隊攻擊力額外提升 1.5 倍；回合結束時，隨機將 3 粒水符石轉化為強化符石',
//   attribute: '水',
//   race: '神族',
//   star: '8★',
// };

/***** transform functions *****/
const filterByMonsterId = filter(({ monsterId }) => monsterId !== null);

const parseMonsterId = each(monster => {
  monster.monsterId = String(Number(monster.monsterId));
});

const propPicker = map(
  pick([
    'monsterName',
    'activeName',
    'activeDescription',
    'monsterId',
    'leaderName',
    'leaderDescription',
    'attribute',
    'race',
    'star',
  ]),
);

const sliceSkillDescription = monster => {
  const { activeName, activeDescription, leaderName, leaderDescription } = pick(
    ['activeName', 'activeDescription', 'leaderName', 'leaderDescription'],
    monster,
  );

  const trimDesc = (name, desc) => String(desc).slice(String(name).length + 1);

  const trimedActive = trimDesc(activeName, activeDescription);
  const trimedLeader = trimDesc(leaderName, leaderDescription);

  const getNewMonster = pipe(
    set(['activeDescription'], trimedActive),
    set(['leaderDescription'], trimedLeader),
  );

  return getNewMonster(monster);
};

const skillArrify = monster => ({
  ...monster,
  activeName: [monster.activeName],
  activeDescription: [monster.activeDescription],
});

const transform = pipe(
  filterByMonsterId,
  sortBy(['monsterId']),
  parseMonsterId,
  propPicker,
  map(monster => sliceSkillDescription(monster)),
  map(monster => skillArrify(monster)),
  mutateSkills,
);

/***** I/O *****/
const read = () => {
  fs.readFile('rawTosMonsters.json', (err, data) => {
    if (err) throw err;

    const raw = JSON.parse(data);
    write(raw);
  });
};

const write = raw => {
  const transformedData = transform(raw);
  fs.writeFile('tosMonsters.json', JSON.stringify(transformedData), err => {
    if (err) throw err;
  });
};

read();
