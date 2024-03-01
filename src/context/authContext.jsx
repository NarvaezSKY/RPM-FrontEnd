import { createContext, useState, useContext, useEffect } from "react";
import { Login, VerifyToken } from "../api/auth.js";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado con AuthContext");
  }

  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(false);

  const singin = async (values) => {
    try {
      const res = await Login(values);
      console.log(res.data);
      setUser(res.data);

      sessionStorage.setItem("token", res.data.token);

      setIsAuth(true);
    } catch (error) {
      return <h1>pene</h1>;
    }
  };

  useEffect(() => {
    async function checkLogin() {
      const token = sessionStorage.getItem("token");

      if (!token) {
        setIsAuth(false);
        setLoading(false);
        return setUser(null);
      }
      try {
        const res = await VerifyToken(token);
        if (!res.data) {
          setIsAuth(true);
          setLoading(false);
          return;
        }
        setIsAuth(true);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        setIsAuth(false);
        setUser(null);
        setLoading(false);
      }
    }
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        singin,
        user,
        isAuth,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
