import jwtDecode from "jwt-decode";
import { createContext } from "react";
import { useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [token, setToken] = useState("")
  const user = token ? jwtDecode(token) : null

  const updateToken = (token) => {
    window.localStorage.setItem("token", token)
    setToken(token)
  }

  useEffect(()=> {
    // use effect code can cause side effects
    // can interact with the outside world
    // will always run inside the browser
    const token = window.localStorage.getItem("token")
    setToken(token)
  }, [])

  return (
    <AuthContext.Provider value={{user, token, updateToken}}>
      {children}
    </AuthContext.Provider>
  )
}