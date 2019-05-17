import React, { useState, useContext } from "react";
import classnames from "classnames/bind";
import {
  FormGroup,
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
  Badge
} from "reactstrap";

import { TagContext } from "../../App";
import styles from "./skillTag.module.scss";

const cx = classnames.bind(styles);

function Tag(props) {
  const { tagName, handleClick, handleCancelSelect, removeListTag } = props;

  return (
    <div className="d-inline-block mr-2 mb-2">
      <input type="checkbox" id={tagName} className={cx("badge-checkbox")} />
      <label htmlFor={tagName}>
        <Badge
          className={cx("d-flex", "p-2", "badge")}
          pill
          color={null}
          onClick={() => handleClick(tagName)}
        >
          <h6 className={cx("m-0", "mr-4", "name")}>{tagName}</h6>
          <h6
            className={cx("m-0", "remove-btn")}
            onClick={e => {
              e.stopPropagation();
              handleCancelSelect(tagName);
              removeListTag(tagName);
            }}
          >
            ✘
          </h6>
        </Badge>
      </label>
    </div>
  );
}

function SkillTags(props) {
  const { setFilters } = props;
  const [tagInput, setTagInput] = useState("");
  const { tagList, isLoading, addListTag, removeListTag } = useContext(
    TagContext
  );

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
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {Object.keys(tagList).map(key => (
            <Tag
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
