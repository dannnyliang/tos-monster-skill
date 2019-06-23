import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";

import monsters from "../tosMonsters";
import { FILTERS } from "../constant";
import SectionList from "../components/SectionList";
import SectionPanel from "../components/SectionPanel";

export const initialFilters = () =>
  Object.keys(FILTERS).reduce(
    (filters, filterKey) => ({ ...filters, [filterKey]: [] }),
    {}
  );

function App(props) {
  const [filters, setFilters] = useState(initialFilters());
  const [searchStr, setSearchStr] = useState("");

  const { logout } = props;

  return (
    <>
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
      <Link to="/login">
        <Button
          color="primary"
          onClick={() => logout()}
          style={{
            position: "fixed",
            left: "20px",
            bottom: "20px",
            boxShadow: "0 0 3px black"
          }}
        >
          切換 UID
        </Button>
      </Link>
    </>
  );
}

export default App;
