import React, { useContext } from 'react'

export const UserContext = React.createContext()

export const GetProfileDetails = () => {
    return useContext(UserContext)
}

const AccessProfileDetails = ({ children }) => {
    
    return (
        <>
            <UserContext.Provider value={'cyberbet4'}>
                {children}
            </UserContext.Provider>
        </>
    )
}

export default AccessProfileDetails
