import React, { useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const BottomBar = ({ currentTab }) => {

    const HomeTab = useRef()
    const SearchTab = useRef()
    const CoursesTab = useRef()
    const AccountTab = useRef()

    console.log(currentTab);

    let HomeTabClass = ""
    let SearchTabClass = ""
    let AccountTabClass = ""
    let CoursesTabClass = ""
    // const [status, setStatus] = useState('Not Home')

    // Set current tab to active
    currentTab === 'search' ? SearchTabClass = "search-tab active btn b-tab d-flex align-items-center" 
    : SearchTabClass = "search-tab btn b-tab d-flex align-items-center"
    
    currentTab === 'home' ? HomeTabClass = "btn b-tab active home-tab d-flex align-items-center"
    : HomeTabClass = "btn b-tab home-tab d-flex align-items-center"
    
    currentTab === 'courses' ? CoursesTabClass = "courses-tab active btn b-tab d-flex align-items-center"
    : CoursesTabClass = "courses-tab btn b-tab d-flex align-items-center"
    
    currentTab === 'account' ? AccountTabClass = "account-tab active btn b-tab d-flex align-items-center"
    : AccountTabClass = "account-tab btn b-tab d-flex align-items-center"


    return (
        <div className="fixed-bottom bottom-bar p-1 pb-3">
            <div className="d-flex p-2 align-items-center" style={{justifyContent : 'space-between'}}>
                <Link to="/home" ref={HomeTab} className={HomeTabClass} id="home-tab" style={{flexDirection: 'column'}}>
                    {/* svg goes here */}
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4373 1.10984C10.7683 0.852383 11.2318 0.852383 11.5628 1.10984L19.8128 7.52651C20.0361 7.70018 20.1667 7.96721 20.1667 8.25008V18.3334C20.1667 19.0628 19.877 19.7622 19.3613 20.278C18.8455 20.7937 18.1461 21.0834 17.4167 21.0834H4.58337C3.85403 21.0834 3.15456 20.7937 2.63883 20.278C2.12311 19.7622 1.83337 19.0628 1.83337 18.3334V8.25008C1.83337 7.96721 1.96397 7.70018 2.18726 7.52651L10.4373 1.10984ZM3.66671 8.69841V18.3334C3.66671 18.5765 3.76328 18.8097 3.93519 18.9816C4.1071 19.1535 4.34026 19.2501 4.58337 19.2501H17.4167C17.6598 19.2501 17.893 19.1535 18.0649 18.9816C18.2368 18.8097 18.3334 18.5765 18.3334 18.3334V8.69841L11 2.9947L3.66671 8.69841Z" fill="#FCFCFF"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5415 11.8461C14.9103 10.5722 17.6768 10.6234 19.4886 11.0261L19.0114 13.1737C17.5232 12.843 15.3397 12.8392 13.5835 13.7837C11.9318 14.6719 10.45 16.5093 10.45 20.3499H8.25C8.25 15.8305 10.0682 13.1762 12.5415 11.8461Z" fill="#FCFCFF"/>
                    </svg>

                    {/* label goes here */}
                    <p className="base-text-small mt-1">
                        Home
                    </p>
                </Link>

                <Link to="/home/search" ref={SearchTab} className={SearchTabClass} style={{flexDirection: 'column'}}>
                    {/* svg goes here */}
                    <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5834 3.66659C7.03955 3.66659 4.16671 6.53942 4.16671 10.0833C4.16671 13.6271 7.03955 16.4999 10.5834 16.4999C14.1272 16.4999 17 13.6271 17 10.0833C17 6.53942 14.1272 3.66659 10.5834 3.66659ZM2.33337 10.0833C2.33337 5.5269 6.02702 1.83325 10.5834 1.83325C15.1397 1.83325 18.8334 5.5269 18.8334 10.0833C18.8334 14.6396 15.1397 18.3333 10.5834 18.3333C6.02702 18.3333 2.33337 14.6396 2.33337 10.0833Z" fill="#FCFCFF"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1143 14.6144C15.4723 14.2565 16.0527 14.2565 16.4107 14.6144L20.3982 18.6019C20.7562 18.9599 20.7562 19.5403 20.3982 19.8983C20.0402 20.2563 19.4598 20.2563 19.1018 19.8983L15.1143 15.9108C14.7563 15.5528 14.7563 14.9724 15.1143 14.6144Z" fill="#FCFCFF"/>
                    </svg>

                    {/* label goes here */}
                    <p className="base-text-small mt-1">
                        Search
                    </p>
                </Link>

                <Link to="/home/courses" ref={CoursesTab} className={CoursesTabClass} style={{flexDirection: 'column'}}>
                    {/* svg goes here */}
                    <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 2.75008C6.94361 2.75008 3.24996 6.44373 3.24996 11.0001C3.24996 15.5564 6.94361 19.2501 11.5 19.2501C16.0563 19.2501 19.75 15.5564 19.75 11.0001C19.75 6.44373 16.0563 2.75008 11.5 2.75008ZM1.41663 11.0001C1.41663 5.43121 5.93109 0.916748 11.5 0.916748C17.0688 0.916748 21.5833 5.43121 21.5833 11.0001C21.5833 16.569 17.0688 21.0834 11.5 21.0834C5.93109 21.0834 1.41663 16.569 1.41663 11.0001Z" fill="#FCFCFF"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.23413 6.52521C9.53219 6.3657 9.89386 6.38318 10.1751 6.5707L15.6751 10.2374C15.9302 10.4074 16.0833 10.6936 16.0833 11.0001C16.0833 11.3066 15.9302 11.5928 15.6751 11.7628L10.1751 15.4295C9.89386 15.617 9.53219 15.6345 9.23413 15.475C8.93607 15.3154 8.75 15.0048 8.75 14.6668V7.33342C8.75 6.99535 8.93607 6.68473 9.23413 6.52521ZM10.5833 9.04622V12.9539L13.5141 11.0001L10.5833 9.04622Z" fill="#FCFCFF"/>
                    </svg>

                    {/* label goes here */}
                    <p className="base-text-small mt-1">
                        Courses
                    </p>
                </Link>

                <Link to="/home/account" ref={AccountTab} className={AccountTabClass} style={{flexDirection: 'column'}}>
                    {/* svg goes here */}
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.09243 14.1757C4.95197 13.3161 6.11776 12.8333 7.33333 12.8333H14.6667C15.8822 12.8333 17.048 13.3161 17.9076 14.1757C18.7671 15.0352 19.25 16.201 19.25 17.4166V19.2499C19.25 19.7562 18.8396 20.1666 18.3333 20.1666C17.8271 20.1666 17.4167 19.7562 17.4167 19.2499V17.4166C17.4167 16.6872 17.1269 15.9878 16.6112 15.472C16.0955 14.9563 15.396 14.6666 14.6667 14.6666H7.33333C6.60399 14.6666 5.90452 14.9563 5.38879 15.472C4.87306 15.9878 4.58333 16.6872 4.58333 17.4166V19.2499C4.58333 19.7562 4.17293 20.1666 3.66667 20.1666C3.16041 20.1666 2.75 19.7562 2.75 19.2499V17.4166C2.75 16.201 3.23289 15.0352 4.09243 14.1757Z" fill="#FCFCFF"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 19.14C2.75 18.5325 3.24249 18.04 3.85 18.04H18.15C18.7575 18.04 19.25 18.5325 19.25 19.14C19.25 19.7476 18.7575 20.24 18.15 20.24H3.85C3.24249 20.24 2.75 19.7476 2.75 19.14Z" fill="#FCFCFF"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11 3.66658C9.48118 3.66658 8.24996 4.8978 8.24996 6.41658C8.24996 7.93537 9.48118 9.16658 11 9.16658C12.5187 9.16658 13.75 7.93537 13.75 6.41658C13.75 4.8978 12.5187 3.66658 11 3.66658ZM6.41663 6.41658C6.41663 3.88528 8.46865 1.83325 11 1.83325C13.5313 1.83325 15.5833 3.88528 15.5833 6.41658C15.5833 8.94789 13.5313 10.9999 11 10.9999C8.46865 10.9999 6.41663 8.94789 6.41663 6.41658Z" fill="#FCFCFF"/>
                    </svg>

                    {/* label goes here */}
                    <p className="base-text-small mt-1">
                        Account
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default BottomBar


