import React, { useState, useContext } from "react";
import {
  FormGroup,
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
  Badge
} from "reactstrap";

import { TagContext } from "../../App";

function Tag(props) {
  const { id, tag, removeListTag } = props;
  return (
    <Badge className="d-inline-flex p-2 mr-2 mb-2" color="info" pill>
      <h6 className="m-0 mr-4">{tag}</h6>
      <h6
        className="m-0"
        style={{ cursor: "pointer", color: "red" }}
        onClick={() => removeListTag(id)}
      >
        ✘
      </h6>
    </Badge>
  );
}

function SkillTags() {
  const [tag, setTag] = useState("");
  const { tagList, isLoading, addListTag, removeListTag } = useContext(
    TagContext
  );
  return (
    <FormGroup>
      <legend>技能標籤</legend>
      <InputGroup className="mb-2">
        <Input bsSize="sm" value={tag} onChange={e => setTag(e.target.value)} />
        <InputGroupAddon addonType="append">
          <Button
            size="sm"
            color="secondary"
            onClick={() => {
              addListTag([...Object.values(tagList), tag]);
              setTag("");
            }}
          >
            新增標籤
          </Button>
        </InputGroupAddon>
      </InputGroup>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        Object.keys(tagList).map(key => (
          <Tag
            key={key}
            id={key}
            tag={tagList[key]}
            removeListTag={removeListTag}
          />
        ))
      )}
    </FormGroup>
  );
}

export default SkillTags;
