import React from 'react';
import { Form, FormGroup, CustomInput } from 'reactstrap';

import { ATTRIBUTES, RACES, STARS } from '../constant';

function Checkbox(props) {
  const { checkGroupName, id, text } = props;
  return (
    <CustomInput
      className="d-inline-block mr-3"
      type="checkbox"
      name={checkGroupName}
      id={id}
      label={text}
    />
  );
}

function FormGroupFactory(props) {
  const {groupName, groupLegend, groupItems} = props
  return (
    <FormGroup>
      <legend>{groupLegend}</legend>
      <div>
        {Object.values(groupItems).map(({ id, label }) => (
          <Checkbox
            key={id}
            id={id}
            checkGroupName={groupName}
            text={label}
          />
        ))}
      </div>
    </FormGroup>
  );
}

function FilterPanel() {
  return (
    <div className="my-3">
      <Form>
        <FormGroupFactory groupName={'attribute'} groupLegend={'屬性'} groupItems={ATTRIBUTES} />
        <FormGroupFactory groupName={'race'} groupLegend={'種族'} groupItems={RACES} />
        <FormGroupFactory groupName={'star'} groupLegend={'稀有度'} groupItems={STARS} />
      </Form>
    </div>
  );
}

export default FilterPanel;
