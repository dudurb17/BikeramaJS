import { useContext } from "react";
import Login from "../../pages/Login/Login";
import { AuthContext } from "./AuthContext";

export const RequireAuth = ({ children, level }) => {
  const auth = useContext(AuthContext);

  if (!auth.user) {
    return <Login />;
  }

  if (auth.user.level === level) return children;
  else return <b>Você não é admin!</b>;

  if (!auth.user) return children;
};
