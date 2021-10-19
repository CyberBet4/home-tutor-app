import React from 'react'
import CourseList from '../../components/CourseList'

const Cart = () => {
    return (
        <div>
            <CourseList closeBtn={true} favBtn={true} />
        </div>
    )
}

export default Cart
