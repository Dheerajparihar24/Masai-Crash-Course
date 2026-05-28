// import { Children, createContext, useContext, useState } from "react";

// // 1. Create context
// export const AuthContext = createContext();

// //2. Custom hook for essay use
// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// // 3. Create Provider
// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState("");
//   const [loading, setLoading] = useState(true);

//   // login/logout functions
//   const isLoggedIn = false;

//   const login = (userData) => {
//     console.log("Login");
//     setUser(userData);
//   };

//   const logout = () => {
//     console.log("Logout");
//   };

//   // Prevent flicker
//   if (loading) {
//     return null;
//   }
//   return (
//     <AuthContext.Provider value={{ login, logout }}>
//       {Children}
//     </AuthContext.Provider>
//   );
// };
