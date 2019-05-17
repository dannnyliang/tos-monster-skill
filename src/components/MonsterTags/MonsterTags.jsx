import React, { useContext } from "react";
import Select from "react-select";
import prop from "lodash/fp/prop";

import useSelectOptions from "./useSelectOptions";
import useSelectedValues from "./useSelectedValues";
import { TagContext, UserContext } from "../../App";

function MonsterTags(props) {
  const { monsterId } = props;
  const { user } = useContext(UserContext);
  const { getTagList, getMonsterTags, setMonsterSkillTags } = useContext(
    TagContext
  );

  const { options } = useSelectOptions(getTagList);
  const { selectedOptions, handleChange } = useSelectedValues({
    id: monsterId,
    getValueSync: getMonsterTags,
    uploadValues: setMonsterSkillTags
  });

  return prop(["role"], user) === "admin" ? (
    <Select
      isMulti
      isClearable={false}
      onChange={handleChange}
      value={selectedOptions}
      options={options}
      closeMenuOnSelect={false}
    />
  ) : (
    <div className="d-flex">
      {selectedOptions.map(({ value, label }) => (
        <div key={value} className="mr-2">
          {label}
        </div>
      ))}
    </div>
  );
}

export default MonsterTags;
