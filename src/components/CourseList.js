import React  from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCircle, faTimes, faHeart } from '@fortawesome/free-solid-svg-icons'

const CourseList = ({ mirror, closeBtn, favBtn }) => {

    const closeBtnObj = {
        id : 1,
        opt : closeBtn
    }

    const favBtnObj = {
        id : 2,
        opt : favBtn
    }

    //MIRROR THE CARD
    let MirrorCard = {}
    
    if(mirror === true ) {
        MirrorCard = {
            flexDirection : 'row-reverse'
        }
    }else {
        MirrorCard = {
            flexDirection : 'row'
        }
    }

    
    console.log(closeBtn);

    const removeCard = () => {
        console.log(this);
    } 

    const favoriteCard = () => {
        console.log(this);
    } 

    //OPTION FOR REMOVE BUTTON
    const toggleBtn = (status) => {
        console.log(status);
        switch (status.opt && status.id) {

            // Close button
            case (true && 1) : 
                return(
                    <button onClick={removeCard()} className="closeBtn btn btn-link">
                        <FontAwesomeIcon icon={faTimes} color={'black'} />
                    </button>
                )

            // Favorite button
            case (true && 2) : 
            return(
                <button onClick={favoriteCard()} className="favBtn btn btn-link mt-3" style={{ 
                    width : 'max-content', 
                    // position: 'absolute',
                    // bottom : -20,
                    // marginTop: 80,
                    backgroundColor : '#FF8181',
                    borderRadius : 25
                }}>
                    <FontAwesomeIcon icon={faHeart} color={'black'} />
                </button>
            )
        
            default:
                console.log(status);
                break;
        }

        // if (status.opt === true){
        //     // console.log('true here...');
        //     return (
        //         <button onClick={removeCard()} className="closeBtn btn btn-link">
        //             <FontAwesomeIcon icon={faTimes} color={'black'} />
        //         </button>
        //     )
        // }else {
        //     // console.log('false here');
        //     return (
        //         <>

        //         </>
        //     )
        // }
        
    }

    //OPTION FOR FAVORITE BUTTON
    const toggleFavBtn = (status) => {

    }
    // console.log(closeBtn);
    // closeBtn === false ? toggleCloseBtn(false) : toggleCloseBtn(true)


    return (
        <div className="d-flex justify-content-center">
            
            <div style={{minWidth : 325}}  className="card mb-3 darkmode p-4 animate__animated animate__fadeInUp animate__fast">
                <div className="d-flex justify-content-end">
                    {toggleBtn(closeBtnObj)}
                </div>
                <div className="d-flex space-between" style={MirrorCard}>
                    
                    {/* TITLE & PRICE */}
                    <div style={{maxWidth : 200}}>
                        <h5 className="mb-2 base-text-semi-small">
                        Advanced Business Management for senior students
                        </h5>
                        <p className="base-text-semi-small mb-2">
                            $290.00
                        </p>
                        
                        {/* rating */}
                        <div className="d-flex align-items-center">
                            <FontAwesomeIcon className="base-text-semi-small mr-1" style={{color : 'yellow'}} icon={faStar} />
                            <p className="base-text-small mr-1">4.5</p>  
                            <FontAwesomeIcon className="base-text-semi-small text-gray mr-1" style={{fontSize : 3}} icon={faCircle} />
                            <p className="base-text-small text-gray mr-1">By Paul Soyinka</p>  
                            <FontAwesomeIcon className="base-text-semi-small text-gray mr-1" style={{fontSize : 3}} icon={faCircle} />
                            <p className="base-text-small text-gray mr-1">All Level</p>  
                        </div>
                    </div>

                    {/* COURSE ICON OR IMAGE */}
                    <img src="https://cdn.iconscout.com/icon/free/png-256/shape-1851248-1569120.png" alt="" className="img-course img-fluid" />
                </div>
                {toggleBtn(favBtnObj)}
            </div>
        </div>
    )
}

export default CourseList
