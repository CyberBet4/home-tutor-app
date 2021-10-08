import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CourseList from '../../components/CourseList'

const Courses = () => {

    let InProgressClass = ''
    let DoneClass = ''


    //state that sets true or false for the dom 
    // to checks to display tab contents
    const [content, setContent] = useState(true)
    
    const changeContent = () => {
        if(content === true) {
            
            return (
            <div>
                <CourseList mirror={true} />
                <CourseList mirror={false} />
                <CourseList mirror={true} />
            </div>
            )
        }else {
            return(
                <div>
                    <CourseList mirror={false} />
                    <CourseList mirror={true} />
                    <CourseList mirror={false} />
                </div>
            )
        }
    }

    //Changing InProgress Tab to White
    content === true ? InProgressClass = "btn btn-link active"
    : InProgressClass = "btn btn-link"
    
    //changing Done Tab to White
    content === false ? DoneClass = "btn btn-link active"
    : DoneClass = "btn btn-link"

    return (
        <div className="bottom-sheet fixed-bottom" style={{minHeight : '90%'}}>
            <div className="d-flex space-between">
                <button onClick={() => setContent(true)} className={InProgressClass} >
                    In Progress
                </button>
                <button onClick={() => setContent(false)} className={DoneClass} >
                    Done
                </button>
            </div>

            <div className="content mt-2">
                {changeContent()}
            </div>

        </div>
    )
}

export default Courses
