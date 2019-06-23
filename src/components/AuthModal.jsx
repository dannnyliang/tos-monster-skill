import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  FormFeedback
} from "reactstrap";
import isNaN from "lodash/isNaN";
import isEmpty from "lodash/isEmpty";

function AuthModal(props) {
  const { uidAuth } = props;
  const [uidInput, setUidInput] = useState("");

  const isInValid = () => {
    return isNaN(Number(uidInput));
  };

  return (
    <Card>
      <CardHeader>請輸入 UID</CardHeader>
      <CardBody>
        <Input
          value={uidInput}
          onChange={e => setUidInput(e.target.value)}
          invalid={isInValid()}
        />
        <FormFeedback>UID 必須為數字</FormFeedback>
      </CardBody>
      <Link to="/">
        <Button
          className="w-100"
          color="primary"
          disabled={isEmpty(uidInput) || isInValid()}
          onClick={() => {
            uidAuth(uidInput);
            setUidInput("");
          }}
        >
          送出
        </Button>
      </Link>
    </Card>
  );
}

export default AuthModal;
