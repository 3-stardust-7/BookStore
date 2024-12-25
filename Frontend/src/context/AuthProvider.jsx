import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
//children is app.jsx navbar.jsx banner.jsx etc
const AuthProvider = ({ children }) => {
  const initialAuthUser = localStorage.getItem("Users"); //local storage user came to variable
  //state manage
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );
  return (
    //return in form of array not object ={{ authUser, setAuthUser }}
    <AuthContext.Provider value = {[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
};

//creating our own hook useAuth
export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
//thus we made our context api
