import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'


const SubNavLevel = ({ iconType, title }) => {
    
    return (
        <div className="d-flex space-between">
            <div className="navigation_title d-flex align-items-center">
                <Link className="btn btn-pressable mr-1" >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </Link>
                <p className="base-text">{title}</p>
            </div>
            <Link className="btn btn-pressable">
                <FontAwesomeIcon icon={iconType} />
            </Link>
        </div>
    )
}

export default SubNavLevel
