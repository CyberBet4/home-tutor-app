import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'


const SubNavLevel = ({ iconType, title }) => {
    

    //bug with this component is.. the icon is still there even when not in use... 
    const toggleIconDisplay = (iconType) => {
        if (iconType !== {}){
            console.log('true here');
            return (
                <Link className="btn btn-pressable">
                    <FontAwesomeIcon icon={iconType} />
                </Link>
            )
        }else {
            console.log('false here');
            return (
                <>

                </>
            )
        }
        
    }
    // iconType.iconName !== '' ? toggleIconDisplay(true, iconType) : toggleIconDisplay(false)
    return (
        <div className="d-flex space-between">
            <div className="navigation_title d-flex align-items-center">
            <Link className="btn btn-pressable mr-1" >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </Link>
                <p className="base-text">{title}</p>
            </div>
            {toggleIconDisplay(iconType)}
        </div>
    )
}

export default SubNavLevel
