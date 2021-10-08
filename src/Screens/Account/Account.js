import React from 'react'
import { useUserDetails } from '../../Auth'
import Options from '../../components/Options'

const Account = () => {
    // uses the profile pic.. dynamically
    let ProfilePic = useUserDetails().profilePic
    let setProfilePicture = {
        backgroundImage : `url('${ProfilePic}')`,
        backgroundSize : 'cover',
        backgroundPosition : 'center',
        backgroundRepeat: 'no-repeat'
    }

    return (
        <div>
            <div className="d-flex justify-content-center mt-5">
                <div className="img-rounded-big" style={setProfilePicture}></div>
            </div>
            <h4 className="big-display text-center mt-4">
                {useUserDetails().name}
            </h4>
            <p className="base-text text-center mt-2">
                {useUserDetails().email}
            </p>
            <div className="bottom-sheet fixed-bottom" style={{minHeight : '55%'}}>
                <Options linkpath={"/home"} title={"Account Information"} />
            </div>
        </div>
    )
}

export default Account
