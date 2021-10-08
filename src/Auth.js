import React, { useContext } from 'react'
import 'firebase/auth'


const UserContext = React.createContext()

export const useUserDetails = () => {
  return useContext(UserContext)
}

 let userAuthDetails = {
   name : 'Peter Ladipo',
   email : 'peterladipo@mail.com',
   profilePic : "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.2.2103491985.1627084800"
 }

const Auth = ({ children }) => {

  return (
    <UserContext.Provider value={userAuthDetails}>
      {children}
    </UserContext.Provider>
  )
}

export default Auth
