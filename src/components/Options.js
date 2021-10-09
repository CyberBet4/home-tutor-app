import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Options = ({ linkpath, title }) => {
    return (
        <Link to={linkpath}>
            <div className="d-flex space-between align-items-center mb-4">
                <p className="base-text">{title}</p>
                <FontAwesomeIcon style={{ color : '#58595C' }} icon={faChevronRight} />
            </div>
        </Link>
    )
}

export default Options
