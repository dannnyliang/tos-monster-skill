const fs = require('fs');
const csv = require('csvtojson');

const pipe = require('lodash/fp/pipe');
const sortBy = require('lodash/fp/sortBy');
const each = require('lodash/fp/each');
const map = require('lodash/fp/map');
const omit = require('lodash/fp/omit');
const replace = require('lodash/fp/replace');

/***** transform functions *****/
const propPicker = map(omit(['web-scraper-order', 'web-scraper-start-url']));

const normalizeMonsterId = each(monster => {
  monster.monsterId = replace('i', '', monster.monsterId);
  monster.monsterId = String(Number(monster.monsterId));
});

const transform = pipe(
  sortBy(['monsterId']),
  propPicker,
  normalizeMonsterId,
);

/***** I/O *****/
const csvFilePath = './dataProcess/tos-monster-images.csv';
const jsonFilePath = './dataProcess/tos-monster-images.json';

const readAndToJson = async () => {
  console.log(`<----- Read Thumbnail csv from ${csvFilePath} ----->`);
  const jsonArray = await csv().fromFile(csvFilePath);
  console.log(`<----- Thumbnail counts: ${jsonArray.length} ----->`);
  write(jsonArray);
};

const write = raw => {
  const transformedData = transform(raw);
  fs.writeFile(jsonFilePath, JSON.stringify(transformedData), err => {
    if (err) throw err;
  });
  console.log(`<----- Write Thumbnail json to: ${jsonFilePath} ----->`);
};

readAndToJson();
