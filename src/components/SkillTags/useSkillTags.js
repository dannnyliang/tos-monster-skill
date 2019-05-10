import { useState, useEffect } from "react";
import { database } from "firebase";
import isEqual from "lodash/isEqual";

/**
 * Issues:
 * - 刪除指定的 tag， render monsterCard 時要把被刪掉的 tag 濾掉，並且更新 db
 */

const useSkillTags = () => {
  const [tagList, setTagList] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTagList().then(res => {
      if (!isEqual(res, tagList)) {
        setTagList(res);
      }
      setIsLoading(false);
    });
  });

  const getTagList = () => {
    return new Promise((resolve, reject) => {
      database()
        .ref("tags/tagList")
        .on("value", snapShot => resolve(snapShot.val()));
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

  const removeListTag = tagKey => {
    setIsLoading(true);
    return database()
      .ref(`tags/tagList/${tagKey}`)
      .remove();
  };

  return {
    tagList,
    isLoading,
    getTagList,
    getMonsterTags,
    addListTag,
    removeListTag,
    setMonsterSkillTags
  };
};

export default useSkillTags;
