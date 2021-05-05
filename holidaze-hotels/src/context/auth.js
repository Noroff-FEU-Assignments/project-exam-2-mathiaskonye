import { createContext } from "react";
import useLocalStorage from "./UseLocalStorage";

const AuthContext = createContext([null, () => {}]);

export const AuthProvider = (props) => {
  const [auth, setAuth] = useLocalStorage("user", null);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;