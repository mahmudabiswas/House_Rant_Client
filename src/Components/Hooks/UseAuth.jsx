import { useContext } from "react";
import { AuthContext } from "../Social/AuthProvider";

const UseAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default UseAuth;
