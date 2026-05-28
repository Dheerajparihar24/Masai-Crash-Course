import { createContext, useState } from "react";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

// Step-1 :createContext
export const AuthContext = createContext();

//Step-2 : create context Provider -> Rap App.js with AuthProvider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register new user / Signup-------
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
    console.log("login user");
    // console.log(userData)
    setUser(userData);
  };

  const logout = () => {
    console.log("Logout");
    setUser(null);
  };

  const resetPassword = () => {
    console.log("reset-user");
  };
  return (
    <AuthContext.Provider
      value={{ user, loading, setUser, login, signup, logout, resetPassword }}
    >
      {children}
    </AuthContext.Provider>
  );
};
