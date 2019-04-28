const fs = require('fs');
const csv = require('csvtojson');

const pipe = require('lodash/fp/pipe');
const map = require('lodash/fp/map');
const each = require('lodash/fp/each');
const filter = require('lodash/fp/filter');
const pick = require('lodash/fp/pick');
const omit = require('lodash/fp/omit');
const set = require('lodash/fp/set');
const sortBy = require('lodash/fp/sortBy');

/***** transform functions *****/
const filterByMonsterId = filter(({ monsterId }) => !isNaN(Number(monsterId)));

const parseMonsterId = each(monster => {
  monster.monsterId = String(Number(monster.monsterId));
});

const propOmiter = map(
  omit([
    'web-scraper-order',
    'web-scraper-start-url',
    'paginationLinks',
    'paginationLinks-href',
    'activeName2',
    'activeDescription2',
  ]),
);

const cleanSecondActive = monster => {
  const { activeName2, activeDescription2 } = pick(
    ['activeName2', 'activeDescription2'],
    monster,
  );

  const ignoreHTMLTags = str =>
    str.replace(/<("[^"]*?"|'[^']*?'|[^'">])*>/gm, '').trim();

  const getNewMonster = pipe(
    set(['activeName2'], ignoreHTMLTags(activeName2)),
    set(['activeDescription2'], ignoreHTMLTags(activeDescription2)),
  );

  return getNewMonster(monster);
};

const sliceSkillDescription = monster => {
  const {
    activeName,
    activeDescription,
    leaderName,
    leaderDescription,
    activeName2,
    activeDescription2,
  } = pick(
    [
      'activeName',
      'activeDescription',
      'activeName2',
      'activeDescription2',
      'leaderName',
      'leaderDescription',
    ],
    monster,
  );

  const trimDesc = (name, desc) => {
    const re = new RegExp(name);
    return desc
      .replace(/\\n/g, '')
      .replace(re, '')
      .trim();
  };

  const trimedActive = trimDesc(activeName, activeDescription);
  const trimedSecondActive = trimDesc(activeName2, activeDescription2);
  const trimedLeader = trimDesc(leaderName, leaderDescription);

  const getNewMonster = pipe(
    set(['activeDescription'], trimedActive),
    set(['activeDescription2'], trimedSecondActive),
    set(['leaderDescription'], trimedLeader),
  );

  return getNewMonster(monster);
};

const skillArrify = monster => {
  if (monster.activeName2) {
    return {
      ...monster,
      activeName: [monster.activeName, monster.activeName2],
      activeDescription: [
        monster.activeDescription,
        monster.activeDescription2,
      ],
    };
  }

  return {
    ...monster,
    activeName: [monster.activeName],
    activeDescription: [monster.activeDescription],
  };
};

const transform = pipe(
  filterByMonsterId,
  sortBy(['monsterId']),
  parseMonsterId,
  map(monster => cleanSecondActive(monster)),
  map(monster => sliceSkillDescription(monster)),
  map(monster => skillArrify(monster)),
  propOmiter,
);

/***** I/O *****/
const csvFilePath = './dataProcess/tos-monsters.csv';
const jsonFilePath = './dataProcess/tos-monsters.json';

const readAndToJson = async () => {
  console.log(`<----- Read Monsters csv from ${csvFilePath} ----->`);
  const jsonArray = await csv().fromFile(csvFilePath);
  console.log(`<----- Monster counts: ${jsonArray.length} ----->`);
  write(jsonArray);
};

const write = raw => {
  const transformedData = transform(raw);
  fs.writeFile(jsonFilePath, JSON.stringify(transformedData), err => {
    if (err) throw err;
  });
  console.log(`<----- Write Monster json to: ${jsonFilePath} ----->`);
};

readAndToJson();
