import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import monsters from "./tosMonsters";
import { FILTERS } from "./constant";
import SectionList from "./components/SectionList";
import SectionPanel from "./components/SectionPanel";
import useSkillTags from "./components/SkillTags/useSkillTags";

export const initialFilters = () =>
  Object.keys(FILTERS).reduce(
    (filters, filterKey) => ({ ...filters, [filterKey]: [] }),
    {}
  );

export const TagContext = React.createContext();

function App() {
  const [filters, setFilters] = useState(initialFilters());
  const [searchStr, setSearchStr] = useState("");

  return (
    <TagContext.Provider value={useSkillTags()}>
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
            <SectionPanel setFilters={setFilters} setSearchStr={setSearchStr} />
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
    </TagContext.Provider>
  );
}

export default App;
