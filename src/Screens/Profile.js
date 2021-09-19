import React from 'react'
import { GetProfileDetails } from '../components/AccessProfileDetails'


const Profile = () => {
    
    return (
        <div>
            <div>Profile Page got the username: {GetProfileDetails()}</div>
        </div>
    )
}

export default Profile
