import React from "react";
import PropTypes from "prop-types";
import {
  Form,
  FormGroup,
  CustomInput,
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
  Badge
} from "reactstrap";

import { FILTERS, ATTRIBUTES, RACES, STARS } from "../constant";

function Checkbox(props) {
  const { groupName, id, text, handleClick } = props;
  return (
    <CustomInput
      className="d-inline-block mr-3"
      type="checkbox"
      name={groupName}
      id={id}
      label={text}
      onChange={handleClick}
    />
  );
}

function FormGroupFactory(props) {
  const { groupName, groupLegend, groupItems, handleClick } = props;
  return (
    <FormGroup>
      <legend>{groupLegend}</legend>
      <div>
        {Object.values(groupItems).map(({ id, label }) => (
          <Checkbox
            key={id}
            id={id}
            groupName={groupName}
            text={label}
            handleClick={handleClick(groupName)}
          />
        ))}
      </div>
    </FormGroup>
  );
}

function SearchInput(props) {
  const { setSearchStr } = props;

  return (
    <FormGroup>
      <legend>關鍵字</legend>
      <InputGroup className="mb-2">
        <Input bsSize="sm" onChange={e => setSearchStr(e.target.value)} />
      </InputGroup>
    </FormGroup>
  );
}

function Tag(props) {
  return (
    <Badge className="d-inline-flex p-2 mr-2 mb-2" color="info" pill>
      <h6 className="m-0 mr-2">Info</h6>
      <h6 className="m-0">✘</h6>
    </Badge>
  );
}

function SkillTags(props) {
  return (
    <FormGroup>
      <legend>技能標籤</legend>
      <InputGroup className="mb-2">
        <Input bsSize="sm" />
        <InputGroupAddon addonType="append">
          <Button size="sm" color="secondary">
            新增標籤
          </Button>
        </InputGroupAddon>
      </InputGroup>
      <Tag />
    </FormGroup>
  );
}

function SectionPanel(props) {
  const { handleClick, setSearchStr, setCanSearchByStr } = props;

  return (
    <div className="my-3">
      <Form>
        <FormGroupFactory
          groupName={FILTERS.ATTRIBUTES.id}
          groupLegend={FILTERS.ATTRIBUTES.label}
          groupItems={ATTRIBUTES}
          handleClick={handleClick}
        />
        <FormGroupFactory
          groupName={FILTERS.RACES.id}
          groupLegend={FILTERS.RACES.label}
          groupItems={RACES}
          handleClick={handleClick}
        />
        <FormGroupFactory
          groupName={FILTERS.STARS.id}
          groupLegend={FILTERS.STARS.label}
          groupItems={STARS}
          handleClick={handleClick}
        />
        <SearchInput
          setSearchStr={setSearchStr}
          setCanSearchByStr={setCanSearchByStr}
        />
        <SkillTags />
      </Form>
    </div>
  );
}

SectionPanel.propTypes = {
  handleClick: PropTypes.func
};

export default SectionPanel;
