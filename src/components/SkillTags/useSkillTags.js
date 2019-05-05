import { useState, useEffect } from "react";
import { database } from "firebase";
import isEqual from "lodash/isEqual";

const useSkillTags = () => {
  const [tagList, setTagList] = useState({});

  useEffect(() => {
    database()
      .ref("tags/tagList")
      .on("value", snapShot => {
        if (!isEqual(snapShot.val(), tagList)) {
          setTagList(snapShot.val());
        }
      });
  });

  const addSkillTag = tag => {
    const newTagKey = database()
      .ref("tags/tagList")
      .push().key;

    const update = {
      [`tags/tagList/${newTagKey}`]: tag
    };

    return database()
      .ref()
      .update(update);
  };

  const removeSkillTag = tagKey => {
    database()
      .ref(`tags/tagList/${tagKey}`)
      .remove();
  };

  return { tagList, addSkillTag, removeSkillTag };
};

export default useSkillTags;
