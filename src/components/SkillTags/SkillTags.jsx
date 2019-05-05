import React, { useState } from "react";
import {
  FormGroup,
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
  Badge
} from "reactstrap";

import useSkillTags from "./useSkillTags";

function Tag(props) {
  const { id, tag, removeSkillTag } = props;
  return (
    <Badge className="d-inline-flex p-2 mr-2 mb-2" color="info" pill>
      <h6 className="m-0 mr-4">{tag}</h6>
      <h6
        className="m-0"
        style={{ cursor: "pointer", color: "red" }}
        onClick={() => removeSkillTag(id)}
      >
        ✘
      </h6>
    </Badge>
  );
}

function SkillTags() {
  const [tag, setTag] = useState("");
  const { tagList, addSkillTag, removeSkillTag } = useSkillTags();
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
              addSkillTag(tag);
              setTag("");
            }}
          >
            新增標籤
          </Button>
        </InputGroupAddon>
      </InputGroup>
      {Object.keys(tagList).length === 0 ? (
        <div>Loading...</div>
      ) : (
        Object.keys(tagList).map(key => (
          <Tag
            key={key}
            id={key}
            tag={tagList[key]}
            removeSkillTag={removeSkillTag}
          />
        ))
      )}
    </FormGroup>
  );
}

export default SkillTags;
