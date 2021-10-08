import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const TopNavLevel = ({iconType, title}) => {
    console.log(iconType);

    return (
        <div className="d-flex space-between">
            <div className="navigation_title d-flex align-items-center">
                <p className="large-text">{title}</p>
            </div>
            <Link className="btn btn-pressable">
                <FontAwesomeIcon icon={iconType} />
            </Link>
        </div>
    )
}

export default TopNavLevel
