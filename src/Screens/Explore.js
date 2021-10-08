import React from 'react'
import { Link } from 'react-router-dom'
import CourseList from '../components/CourseList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const Explore = () => {
    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="bottom-sheet fixed-bottom" style={{minHeight : '90%'}}>
                {/* <div className="input-group right mb-3">
                <input type="email" placeholder="Email" className="form-control" />

                    <span className="input-group-text">
                        <FontAwesomeIcon className="gray-color" />
                    </span>
                </div> */}
                    <input type="text" placeholder="Search courses..." className="form-control" />
                    <h5 className="base-text mt-4 mb-4">Browse Category</h5>
                    <div className="d-flex" style={{flexWrap : 'wrap'}}>
                        <Link className="badges m-1">
                            <p className="base-text-small">Technology</p>
                        </Link>

                        <Link className="badges m-1">
                            <p className="base-text-small">Business</p>
                        </Link>

                        <Link className="badges m-1">
                            <p className="base-text-small">Finance</p>
                        </Link>

                        <Link className="badges m-1">
                            <p className="base-text-small">Python</p>
                        </Link>

                        <Link className="badges m-1">
                            <p className="base-text-small">Programming</p>
                        </Link>


                    </div>

                    {/* Recommended Courses */}
                    <h5 className="base-text mt-4 mb-4">Recommended Courses</h5>
                    <CourseList />
                    <CourseList />
                </div>  
            </div>
        </>
    )
}

export default Explore
