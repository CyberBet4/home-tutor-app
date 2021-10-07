import React, { useContext } from 'react'
import 'firebase/auth'


const UserContext = React.createContext()

export const useUserDetails = () => {
  return useContext(UserContext)
}

const Auth = ({ children }) => {

  return (
    <UserContext.Provider>
      {children}
    </UserContext.Provider>
  )
}

export default Auth
