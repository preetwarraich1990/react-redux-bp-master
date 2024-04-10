import React from 'react'
import { useLocation, Navigate } from 'react-router-dom'
import { useActions, useAppSelector } from '../hooks/hooks'

interface AuthContextType {
  isAuthenticated: boolean
  signin: (user: loginInterface, callback: Function) => void
  signout: (callback: VoidFunction) => void
}

interface loginInterface {
  username: string
  password: string
}

let AuthContext = React.createContext<AuthContextType>(null!)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { loginUser } = useActions()
  const { isAuthenticated } = useAppSelector((state) => state.authReducer)

  let signin = async (credentials: loginInterface, callback: Function) => {
      const a = await loginUser(credentials)  
      callback(a) 
  }

  let signout = (callback: VoidFunction) => {}
  let value = { isAuthenticated, signin, signout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return React.useContext(AuthContext)
}

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  let auth = useAuth()
  let location = useLocation()
  if (!auth.isAuthenticated) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to='/login' state={{ from: location }} replace />
  }

  return children
}
