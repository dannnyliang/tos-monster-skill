import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import monsters from "./tosMonsters";
import { FILTERS } from "./constant";
import ErrorBoundary from "./components/ErrorBoundary";
import SectionList from "./components/SectionList";
import SectionPanel from "./components/SectionPanel";

export const initialFilters = () =>
  Object.keys(FILTERS).reduce(
    (filters, filterKey) => ({ ...filters, [filterKey]: [] }),
    {}
  );

function App() {
  const [filters, setFilters] = useState(initialFilters());
  const [searchStr, setSearchStr] = useState("");

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
    <ErrorBoundary renderError={<div>ERROR!!</div>}>
      <Container fluid>
        <Row>
          <Col
            md="4"
            style={{
              height: "100vh",
              position: "fixed",
              overflowY: "scroll",
              borderRight: "1px solid rgba(0, 0, 0, 0.125)"
            }}
          >
            <SectionPanel
              handleClick={handleClick}
              setSearchStr={setSearchStr}
            />
          </Col>
          <Col md={{ size: 8, offset: 4 }}>
            <SectionList
              monsters={monsters}
              filters={filters}
              initialPage={1}
              searchStr={searchStr}
            />
          </Col>
        </Row>
      </Container>
    </ErrorBoundary>
  );
}

export default App;
