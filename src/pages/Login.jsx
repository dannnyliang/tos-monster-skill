import React from "react";
import { Container } from "reactstrap";

import AuthModal from "../components/AuthModal";

function Login(props) {
  const { uidAuth } = props;

  return (
    <Container
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div style={{ width: "50vw" }}>
        <AuthModal uidAuth={uidAuth} />
      </div>
    </Container>
  );
}

export default Login;
