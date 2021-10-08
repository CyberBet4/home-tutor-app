import React from 'react'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import TopNavLevel from '../components/Navigations/TopNavLevel'
import SubNavLevel from '../components/Navigations/SubNavLevel'

const shoppingbag = faShoppingBag
const Header = () => {
    return (
        <>
            <TopNavLevel title={"Explore"} iconType={shoppingbag} />
        </>
    )
}

export default Header
