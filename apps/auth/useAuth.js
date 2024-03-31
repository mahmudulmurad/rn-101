import { useContext } from "react";
import AuthContext from "./AuthContext";
import authStorage from "../auth/Store";
import "core-js/stable/atob";
import { jwtDecode } from "jwt-decode";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (token) => {
    const user = jwtDecode(token);
    setUser(user);
    authStorage.storeToken(token);
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken("token");
  };

  return { user, logIn, logOut };
};
