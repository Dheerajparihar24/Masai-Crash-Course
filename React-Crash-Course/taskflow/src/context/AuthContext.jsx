import { createContext, useState } from "react";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signup = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      setUser(userCredential.user);

      return {
        success: true,
        user: userCredential.user,
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  };

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const resetPassword = () => {};

  return (
    <AuthContext.Provider
      value={{
        user,
        signup,
        login,
        logout,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
