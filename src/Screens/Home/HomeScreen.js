import React from 'react'
import 'animate.css'
import OngoingCourseList from '../../components/OngoingCourseList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import CourseList from '../../components/CourseList';
import { useUserDetails } from '../../Auth';

const HomeScreen = () => {
    let ProfilePic = useUserDetails().profilePic
    let setProfilePicture = {
        backgroundImage : `url('${ProfilePic}')`,
        backgroundSize : 'cover',
        backgroundPosition : 'center',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <div>
            {/* HEADER WITH PROFILE & GREETING */}
                    {/* <div className="darkmode main"> */}
                    <div className="d-flex mb-3 align-items-center" style={{justifyContent : 'space-between'}}>
                        <div className="d-flex align-items-center animate__animated animate__fadeIn animate__faster">
                            {/* PROFILE IMAGE */}
                            <div className="img-rounded mr-3" style={setProfilePicture}></div>

                            <div>
                                <p className="base-text-small">Welcome Back</p>
                                <p className="base-text">Peter Ladipo</p>
                            </div>
                        </div>
                        <div>
                            <button className="btn btn-pressable">
                                <FontAwesomeIcon size={16} icon={faBell} />
                            </button>
                            
                        </div>
                    </div>

                    {/* ONGOING LIST WITH PROGRESS */}
                    <OngoingCourseList />

                    {/* Recommendations */}
                    <div className="d-flex justify-content-center">
                        <div className="bottom-sheet fixed-bottom" style={{minHeight : '66%'}}>
                            <h5 className="base-text mt-4 mb-4">Recommendations</h5>
                            <CourseList  />
                            <CourseList  />
                        </div>
                    </div>
        </div>
    )
}

export default HomeScreen
