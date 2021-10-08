import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Courses = () => {

    //state that sets true or false for the dom 
    // to checks to display tab contents
    const [content, setContent] = useState(true)
    
    const changeContent = () => {
        if(content === true) {
            return (
            <div>
                <button className="btn btn-primary">Done Content</button>
            </div>
            )
        }else {
            return(
                <div>
                    Done Content
                </div>
            )
        }
    }
    
    return (
        <div className="bottom-sheet fixed-bottom" style={{minHeight : '90%'}}>
            <div className="d-flex space-between">
                <button onClick={() => setContent(true)} className="btn btn-link active" >
                    In Progress
                </button>
                <button onClick={() => setContent(false)} className="btn btn-link" >
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
