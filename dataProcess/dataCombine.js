const fs = require('fs');

const prop = require('lodash/fp/prop');

/***** I/O *****/
const imagesFilePath = './dataProcess/tos-monster-images.json';
const monstersFilePath = './dataProcess/tos-monsters.json';
const combinedFilePath = './src/tosMonsters.js';

const readFilePromise = filename => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, function(err, data) {
      if (err) reject(err);
      else resolve(JSON.parse(data));
    });
  });
};

const removeFile = filename => {
  fs.unlink(filename, err => {
    if (err) throw err;
    console.log(`<----- Remove ${filename} ----->`);
  });
};

const read = () => {
  console.log(`<----- Read images and monsters ----->`);
  Promise.all([
    readFilePromise(imagesFilePath),
    readFilePromise(monstersFilePath),
  ]).then(res => {
    console.log(`<----- Read Successful, remove raw files ----->`);
    removeFile(imagesFilePath);
    removeFile(monstersFilePath);
    const thumbnails = res[0];
    const monsters = res[1];

    const combined = monsters.map(monster => {
      const match = thumbnails.find(
        ({ monsterId }) => monsterId === monster.monsterId,
      );
      return {
        ...monster,
        thumbnail: prop(['thumbnail-src'], match),
      };
    });
    write(combined);
  });
};

const write = raw => {
  const transformedData = raw;
  fs.writeFile(
    combinedFilePath,
    `
  const monsters = ${JSON.stringify(transformedData)};
  export default monsters;
  `,
    err => {
      if (err) throw err;
    },
  );
};

read();
