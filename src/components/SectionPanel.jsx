import React from "react";
import PropTypes from "prop-types";
import { Form, FormGroup, CustomInput, InputGroup, Input } from "reactstrap";

import SkillTags from "./SkillTags";
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

function SectionPanel(props) {
  const { setFilters, setSearchStr } = props;

  const handleClick = group => evt => {
    const id = evt.target.id;

    setFilters(state => {
      if (state[group].includes(id)) {
        return {
          ...state,
          [group]: state[group].filter(item => item !== id)
        };
      }
      return {
        ...state,
        [group]: [...state[group], id]
      };
    });
  };

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
        <SearchInput setSearchStr={setSearchStr} />
        <SkillTags setFilters={setFilters} />
      </Form>
    </div>
  );
}

SectionPanel.propTypes = {
  handleClick: PropTypes.func
};

export default SectionPanel;
