import { useState, useEffect } from "react";
import { database } from "firebase";
import isEqual from "lodash/isEqual";

const useSkillTags = () => {
  const [tagList, setTagList] = useState({});
  const [monstersTags, setMonstersTags] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTag().then(res => {
      const { tagList: dbTagList, ...dbMonstersTags } = res;
      if (!isEqual(dbTagList, tagList)) {
        setTagList(dbTagList);
      }
      if (!isEqual(dbMonstersTags, monstersTags)) {
        setMonstersTags(dbMonstersTags);
      }
      setIsLoading(false);
    });
  });

  const getTag = () => {
    return new Promise((resolve, reject) => {
      database()
        .ref("tags")
        .on("value", snapShot => resolve(snapShot.val()));
    });
  };

  const getTagList = () => {
    return new Promise((resolve, reject) => {
      database()
        .ref("tags")
        .on("value", snapShot => resolve(snapShot.val().tagList));
    });
  };

  const getMonsterTags = monsterId => {
    return new Promise((resolve, reject) => {
      database()
        .ref(`tags/${monsterId}`)
        .on("value", snapShot => resolve(snapShot.val()));
    });
  };

  const addListTag = newTagList => {
    setIsLoading(true);
    return database()
      .ref("tags/tagList")
      .set(newTagList);
  };

  const setMonsterSkillTags = (monsterId, tags) => {
    setIsLoading(true);
    return database()
      .ref(`tags/${monsterId}`)
      .set(tags);
  };

  const removeListTag = tagName => {
    const modifyIds = Object.keys(monstersTags).filter(key =>
      monstersTags[key].includes(tagName)
    );

    const getNewMonsterTags = id => {
      const newMonsterTags = [...monstersTags[id]];
      const idx = newMonsterTags.indexOf(tagName);
      if (idx > -1) newMonsterTags.splice(idx, 1);
      return newMonsterTags;
    };

    const getNewTagList = tagName => {
      const newTagList = [...tagList];
      const idx = newTagList.indexOf(tagName);
      if (idx > -1) newTagList.splice(idx, 1);
      return newTagList;
    };

    Promise.all([
      database()
        .ref("tags/tagList")
        .set(getNewTagList(tagName)),
      modifyIds.forEach(id =>
        database()
          .ref(`tags/${id}`)
          .set(getNewMonsterTags(id))
      )
    ]);
  };

  return {
    tagList,
    monstersTags,
    isLoading,
    getTagList,
    getMonsterTags,
    addListTag,
    removeListTag,
    setMonsterSkillTags
  };
};

export default useSkillTags;
