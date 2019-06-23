import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import isEmpty from "lodash/isEmpty";

import useAuth from "./hooks/useAuth";
import useSkillTags from "./hooks/useSkillTags";
import SkillList from "./pages/SkillList";
import Login from "./pages/Login";

export const TagContext = React.createContext();
export const UserContext = React.createContext();

function AppRouter() {
  const lsUser = isEmpty(localStorage.getItem("user"))
    ? null
    : JSON.parse(localStorage.getItem("user"));

  const { user, uidAuth, logout } = useAuth({ lsUser });

  return (
    <TagContext.Provider value={useSkillTags()}>
      <UserContext.Provider value={{ user, uidAuth }}>
        <Router>
          <Route path="/" exact>
            {({ match }) => match && <SkillList logout={logout} />}
          </Route>
          <Route path="/login">
            <Login uidAuth={uidAuth} />
          </Route>
        </Router>
      </UserContext.Provider>
    </TagContext.Provider>
  );
}

export default AppRouter;
