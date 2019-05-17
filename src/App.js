import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import isEmpty from "lodash/isEmpty";

import monsters from "./tosMonsters";
import { FILTERS } from "./constant";
import AuthModal from "./components/AuthModal";
import SectionList from "./components/SectionList";
import SectionPanel from "./components/SectionPanel";
import useSkillTags from "./components/SkillTags/useSkillTags";
import useAuth from "./useAuth";

export const initialFilters = () =>
  Object.keys(FILTERS).reduce(
    (filters, filterKey) => ({ ...filters, [filterKey]: [] }),
    {}
  );

export const TagContext = React.createContext();
export const UserContext = React.createContext();

function App() {
  const [filters, setFilters] = useState(initialFilters());
  const [searchStr, setSearchStr] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(true);

  const { user, uidAuth, logout } = useAuth(setIsModalOpen);

  useEffect(() => {
    if (!isEmpty(user) && isModalOpen) setIsModalOpen(false);
  });

  return (
    <TagContext.Provider value={useSkillTags()}>
      <UserContext.Provider value={{ user, uidAuth }}>
        <AuthModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
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
                setFilters={setFilters}
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
        <Button
          color="primary"
          onClick={() => {
            logout();
            setIsModalOpen(true);
          }}
          style={{
            position: "fixed",
            right: "20px",
            bottom: "20px",
            boxShadow: "0 0 3px black"
          }}
        >
          切換 UID
        </Button>
      </UserContext.Provider>
    </TagContext.Provider>
  );
}

export default App;
