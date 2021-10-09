import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
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

    let toggleIcon = ''
    let sheetHeight = ''

    const [toggle, setToggle] = useState(false)

    
    if(toggle === true) {
        sheetHeight = '92%'
        toggleIcon = <FontAwesomeIcon icon={faChevronDown} />
    }else{
        sheetHeight = '40%'
        toggleIcon = <FontAwesomeIcon icon={faChevronUp} />
    }

    let bottomSheetHeight = {
        minHeight : sheetHeight,
        maxHeight : '60%',
        transition: 'all 500ms ease-in 0s'
        
    }

    return (
        <div>
            <div className="d-flex justify-content-center mt-3">
                <div className="img-rounded-big" style={setProfilePicture}></div>
            </div>
            <h4 className="big-display text-center mt-2">
                {useUserDetails().name}
            </h4>
            <p className="base-text text-center mt-2">
                {useUserDetails().email}
            </p>
            <div className="bottom-sheet fixed-bottom" style={bottomSheetHeight}>
                <div className="d-flex justify-content-center mb-3">
                    <button onClick={() => toggle === false ? setToggle(true) : setToggle(false)} className="text-center btn btn-link">
                        {toggleIcon}
                    </button>
                </div>
                
                <Options linkpath={"/home"} title={"Account Information"} />
                <Options linkpath={"/home"} title={"Email notification preferences"} />
                <Options linkpath={"/home"} title={"Learning reminders"} />
                <Options linkpath={"/home"} title={"Email notification preferences"} />
                
                <p className="base-text-small mt-4 mb-3" style={{color : '#58595C'}}>Support</p>
                <Options linkpath={"/home"} title={"About Home Tutors"} />
                <Options linkpath={"/home"} title={"Frequently asked questions"} />
                <Options linkpath={"/home"} title={"Share This app"} />

            </div>
        </div>
    )
}

export default Account
