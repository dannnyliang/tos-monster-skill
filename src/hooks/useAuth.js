import { useState } from "react";
import { database } from "firebase";
import isNil from "lodash/isNil";

const useAuth = ({ lsUser }) => {
  const [user, setUser] = useState(lsUser);

  const getUsers = () => {
    return new Promise((resolve, reject) => {
      database()
        .ref("users")
        .once("value", snapShot => resolve(snapShot.val()));
    });
  };

  const uidAuth = uid => {
    database()
      .ref(`users/${uid}`)
      .once("value", snapShot => {
        const userLogin = snapShot.val();
        if (isNil(userLogin)) {
          registered(uid);
          return;
        }
        login(userLogin);
      });
  };

  const login = userLogin => {
    if (userLogin !== user) {
      setUser(userLogin);
    }
    localStorage.setItem("user", JSON.stringify(userLogin));
  };

  const logout = () => {
    localStorage.setItem("user", "");
  };

  const registered = uid => {
    database()
      .ref(`users/${uid}`)
      .set({ uid, role: "user" }, () => {
        localStorage.setItem("user", JSON.stringify({ uid, role: "user" }));
      });
  };

  return {
    user,
    uidAuth,
    logout,
    getUsers
  };
};

export default useAuth;
