const fs = require("fs");

const prop = require("lodash/fp/prop");

/***** I/O *****/
const imagesFilePath = "./dataProcess/tos-monster-images.json";
const monstersFilePath = "./dataProcess/tos-monsters.json";
const logPath = "./dataProcess/monster-log.json";
const combinedFilePath = "./src/tosMonsters.js";

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
    readFilePromise(monstersFilePath)
  ]).then(res => {
    console.log(`<----- Read Successful, remove raw files ----->`);
    removeFile(imagesFilePath);
    removeFile(monstersFilePath);
    const thumbnails = res[0];
    const monsters = res[1];

    const combined = monsters.map(monster => {
      const match = thumbnails.find(
        ({ monsterId }) => monsterId === monster.monsterId
      );
      return {
        ...monster,
        thumbnail: prop(["thumbnail-src"], match)
      };
    });
    console.log(`<----- Combined Monster counts: ${combined.length} ----->`);
    writeLog(monsters, thumbnails, combined);
    write(combined);
  });
};

const writeLog = (monsters, thumbnails, combined) => {
  const now = new Date();
  const log = {
    raw: {
      monsters: {
        description: "從神魔 wiki 上爬下來經過清理後的召喚獸資訓",
        total: monsters.length
      },
      images: {
        description: "召喚獸縮圖，用於和 monsters combine",
        total: thumbnails.length
      }
    },
    transformed: {
      monsters: {
        description: "已經 combine 好的資料",
        total: combined.length
      }
    },
    upadteTime: `${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
  };

  fs.writeFile(logPath, JSON.stringify(log), err => {
    if (err) throw err;
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
    }
  );
};

read();
