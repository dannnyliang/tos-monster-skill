import React, { useState, useContext } from "react";
import {
  FormGroup,
  InputGroup,
  Input,
  InputGroupAddon,
  Button
} from "reactstrap";
import prop from "lodash/fp/prop";

import TagBadge from "../TagBadge";
import { TagContext, UserContext } from "../../App";

function SkillTags(props) {
  const { setFilters } = props;
  const [tagInput, setTagInput] = useState("");
  const { tagList, isLoading, addListTag, removeListTag } = useContext(
    TagContext
  );
  const { user } = useContext(UserContext);

  const handleClick = selectedTag =>
    setFilters(state => {
      const tags = state["TAGS"];
      if (tags.includes(selectedTag)) {
        return {
          ...state,
          TAGS: tags.filter(tag => tag !== selectedTag)
        };
      }
      return {
        ...state,
        TAGS: [...tags, selectedTag]
      };
    });

  const handleCancelSelect = selectedTag =>
    setFilters(state => ({
      ...state,
      TAGS: state["TAGS"].filter(tag => tag !== selectedTag)
    }));

  return (
    <FormGroup>
      <legend>技能標籤</legend>
      {prop(["role"], user) === "admin" && (
        <InputGroup className="mb-2">
          <Input
            bsSize="sm"
            value={tagInput}
            onChange={e => setTagInput(e.target.value)}
          />
          <InputGroupAddon addonType="append">
            <Button
              size="sm"
              color="secondary"
              onClick={() => {
                addListTag([...Object.values(tagList), tagInput]);
                setTagInput("");
              }}
            >
              新增標籤
            </Button>
          </InputGroupAddon>
        </InputGroup>
      )}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {Object.keys(tagList).map(key => (
            <TagBadge
              key={key}
              tagName={tagList[key]}
              handleClick={handleClick}
              handleCancelSelect={handleCancelSelect}
              removeListTag={removeListTag}
            />
          ))}
        </div>
      )}
    </FormGroup>
  );
}

export default SkillTags;
