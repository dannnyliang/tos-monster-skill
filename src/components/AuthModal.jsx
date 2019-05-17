import React, { useState, useContext } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Input,
  Button,
  FormFeedback
} from "reactstrap";
import isNaN from "lodash/isNaN";
import isEmpty from "lodash/isEmpty";

import { UserContext } from "../App";

function AuthModal(props) {
  const { isModalOpen, setIsModalOpen } = props;
  const { uidAuth } = useContext(UserContext);
  const [uidInput, setUidInput] = useState("");

  const isInValid = () => {
    return isNaN(Number(uidInput));
  };

  return (
    <Modal isOpen={isModalOpen}>
      <ModalHeader>請輸入 UID</ModalHeader>
      <ModalBody>
        <Input
          value={uidInput}
          onChange={e => setUidInput(e.target.value)}
          invalid={isInValid()}
        />
        <FormFeedback>UID 必須為數字</FormFeedback>
      </ModalBody>
      <Button
        color="primary"
        disabled={isEmpty(uidInput) || isInValid()}
        onClick={() => {
          uidAuth(uidInput);
          setIsModalOpen(false);
        }}
      >
        送出
      </Button>
    </Modal>
  );
}

export default AuthModal;
