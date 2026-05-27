import { Children, createContext, useContext, useState } from "react";

// 1. Create context
export const AuthContext = createContext();

// 2. Create Provider
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");

  // login/logout functions
  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ login, logout }}>
      {Children}
    </AuthContext.Provider>
  );
};

//3. Custom hook for essay use
export const useAuth = () => {
  return useContext(AuthContext);
};
