import { database } from "firebase";
import isNil from "lodash/isNil";
import isEmpty from "lodash/isEmpty";

const useAuth = setIsModalOpen => {
  const getUsers = () => {
    return new Promise((resolve, reject) => {
      database()
        .ref("users")
        .once("value", snapShot => resolve(snapShot.val()));
    });
  };

  const getCurrentUser = () => {
    const lsUser = localStorage.getItem("user");
    if (isEmpty(lsUser)) return undefined;
    return JSON.parse(lsUser);
  };

  const uidAuth = uid => {
    database()
      .ref(`users/${uid}`)
      .once("value", snapShot => {
        const user = snapShot.val();
        if (isNil(user)) {
          registered(uid);
          return;
        }
        login(user);
      });
  };

  const login = user => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = () => {
    localStorage.setItem("user", "");
  };

  const registered = uid => {
    database()
      .ref(`users/${uid}`)
      .set({ uid, role: "user" }, () => {
        localStorage.setItem("user", JSON.stringify({ uid, role: "user" }));
        setIsModalOpen(false);
      });
  };

  return {
    user: getCurrentUser(),
    uidAuth,
    logout,
    getUsers
  };
};

export default useAuth;
