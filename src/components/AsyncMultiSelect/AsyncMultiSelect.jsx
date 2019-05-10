import React, { useContext } from "react";
import Select from "react-select";
import useSelectOptions from "./useSelectOptions";
import useSelectedValues from "./useSelectedValues";
import { TagContext } from "../../App";

function AsyncMultiSelect(props) {
  const { monsterId } = props;
  const { getTagList, getMonsterTags, setMonsterSkillTags } = useContext(
    TagContext
  );

  const { options } = useSelectOptions(getTagList);
  const { selectedOptions, handleChange } = useSelectedValues({
    id: monsterId,
    getValueSync: getMonsterTags,
    uploadValues: setMonsterSkillTags
  });

  return (
    <Select
      isMulti
      onChange={handleChange}
      value={selectedOptions}
      options={options}
      {...props}
    />
  );
}

export default AsyncMultiSelect;
