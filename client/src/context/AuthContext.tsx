import { createContext, ReactNode, useContext, useState } from "react"

 type authContext = {
    isAuthenticated : boolean,
    login:(token:string) => void,
    logout:()=>void
}

const AuthContext = createContext<authContext | undefined>(undefined)

const AuthProvider = ({children}:{children:ReactNode}) => {

    const[isAuthenticated, setIsAuthenticated] = useState(false)
    const login = (token:string) => {
        localStorage.setItem('token', token)
        setIsAuthenticated(true)
    }

    const logout = () => {
        localStorage.removeItem('token')
        setIsAuthenticated(false)
    } 
  return (
    <AuthContext.Provider value={{isAuthenticated, login, logout}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error
    }
    return context
}