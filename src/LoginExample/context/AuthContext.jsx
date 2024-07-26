import {createContext ,useContext, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)  /* we will need it in header to deside which component will be apeare in the aditional with header component */
                                             /* we need it inside the header itself to toggel between the login and logout link which link shoud apear */
    /* today we will not chick if user in api this data will stor outside api, */

     const login = (username) => setUser(username);
     const logout = () => {
      setUser("")
         
     };

     return (
        <AuthContext.Provider value={{ user, logout, login }}>
          {children}
        </AuthContext.Provider>
      );
}
            /* custom hook for useContext */
export const useAuth = () => useContext(AuthContext);
