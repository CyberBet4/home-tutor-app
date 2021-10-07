import React from 'react'

const OngoingCourseList = () => {
    return (
        <div className="d-flex justify-content-center animate__animated animate__fadeIn animate__fast">
            <div style={{minWidth : 325}} className="darkmode card p-4">
                <div className="d-flex space-between">
                    {/* TITLE & PRICE */}
                    <div style={{maxWidth : 200}}>
                        <h5 className="mb-2 base-text-semi-small">
                        Quantum Chemistry for science students
                        </h5>
                        <p className="base-text-semi-small">
                            $520.00
                        </p>
                    </div>

                    {/* COURSE ICON OR IMAGE */}
                    <img src="https://cdn.iconscout.com/icon/free/png-256/shape-1851248-1569120.png" alt="" className="img-course-sm img-fluid" />
                </div>

                {/* PROGRESS */}
                <div className="d-flex space-between mb-4">
                    <div className="d-flex align-items-center">
                        {/* current progress */}
                        <div className="icon-box mr-1">
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 2.16667C7.73856 2.16667 5.49998 4.40524 5.49998 7.16667C5.49998 9.92809 7.73856 12.1667 10.5 12.1667C13.2614 12.1667 15.5 9.92809 15.5 7.16667C15.5 4.40524 13.2614 2.16667 10.5 2.16667ZM3.83331 7.16667C3.83331 3.48477 6.81808 0.5 10.5 0.5C14.1819 0.5 17.1666 3.48477 17.1666 7.16667C17.1666 10.8486 14.1819 13.8333 10.5 13.8333C6.81808 13.8333 3.83331 10.8486 3.83331 7.16667Z" fill="#FCFCFF"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5488 11.2407C14.005 11.1802 14.4239 11.501 14.4844 11.9572L15.4928 19.5572C15.5349 19.8744 15.3916 20.1877 15.1242 20.3634C14.8567 20.539 14.5123 20.546 14.2379 20.3814L10.5 18.1387L6.7621 20.3814C6.48771 20.546 6.14327 20.539 5.87582 20.3633C5.60837 20.1876 5.46514 19.8743 5.50727 19.5571L6.51561 11.9654C6.57621 11.5092 6.99518 11.1885 7.45141 11.2491C7.90764 11.3097 8.22836 11.7287 8.16777 12.1849L7.38706 18.0628L10.0713 16.4522C10.3352 16.2939 10.6649 16.2939 10.9288 16.4522L13.6133 18.0629L12.8323 12.1764C12.7717 11.7202 13.0925 11.3013 13.5488 11.2407Z" fill="#FCFCFF"/>
                            </g>
                            <defs>
                            <clipPath id="clip0">
                            <rect width="20" height="20" fill="white" transform="translate(0.5 0.5)"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </div>
                        {/* svg goes here */}

                        <div>
                            <p className="base-text-small">
                                Current Progress
                            </p>
                            <p className="base-text">
                                50%
                            </p>
                        </div>
                    </div>

                    <div className="d-flex align-items-center">
                        {/* overall progress */}
                        <div className="icon-box mr-1">
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 2.16667C7.73856 2.16667 5.49998 4.40524 5.49998 7.16667C5.49998 9.92809 7.73856 12.1667 10.5 12.1667C13.2614 12.1667 15.5 9.92809 15.5 7.16667C15.5 4.40524 13.2614 2.16667 10.5 2.16667ZM3.83331 7.16667C3.83331 3.48477 6.81808 0.5 10.5 0.5C14.1819 0.5 17.1666 3.48477 17.1666 7.16667C17.1666 10.8486 14.1819 13.8333 10.5 13.8333C6.81808 13.8333 3.83331 10.8486 3.83331 7.16667Z" fill="#FCFCFF"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5488 11.2407C14.005 11.1802 14.4239 11.501 14.4844 11.9572L15.4928 19.5572C15.5349 19.8744 15.3916 20.1877 15.1242 20.3634C14.8567 20.539 14.5123 20.546 14.2379 20.3814L10.5 18.1387L6.7621 20.3814C6.48771 20.546 6.14327 20.539 5.87582 20.3633C5.60837 20.1876 5.46514 19.8743 5.50727 19.5571L6.51561 11.9654C6.57621 11.5092 6.99518 11.1885 7.45141 11.2491C7.90764 11.3097 8.22836 11.7287 8.16777 12.1849L7.38706 18.0628L10.0713 16.4522C10.3352 16.2939 10.6649 16.2939 10.9288 16.4522L13.6133 18.0629L12.8323 12.1764C12.7717 11.7202 13.0925 11.3013 13.5488 11.2407Z" fill="#FCFCFF"/>
                            </g>
                            <defs>
                            <clipPath id="clip0">
                            <rect width="20" height="20" fill="white" transform="translate(0.5 0.5)"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </div>
                        {/* svg goes here */}

                        <div>
                            <p className="base-text-small">
                                Overall Progress
                            </p>
                            <p className="base-text">
                                20%
                            </p>
                        </div>
                    </div>                    
                </div>

                {/* progress bar */}
                <div className="darkmode progress">
                    <div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
    )
}

export default OngoingCourseList
