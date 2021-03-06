import React from 'react'
import 'animate.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Layouts/Header'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import TopNavLevel from '../components/Navigations/TopNavLevel';
import BottomBar from '../Layouts/BottomBar';
import HomeScreen from './Home/HomeScreen'
import Cart from './Checkout/Cart';
import Explore from './Explore'
import Courses from './Courses/Courses'
import Account from './Account/Account'
import SubNavLevel from '../components/Navigations/SubNavLevel';


const Home = () => {
    const shoppingbag = faShoppingBag
    
    return (
        <Router>
        <div className="darkmode main">
            <Switch>
                <Route exact path="/home" >
                    <HomeScreen />
                    <BottomBar currentTab={'home'} />
                </Route>

                <Route path="/home/explore">
                    <TopNavLevel title={"Explore"} iconType={shoppingbag} />
                    <Explore />
                    <BottomBar currentTab={'explore'} />
                </Route>

                <Route path="/home/courses">
                    <TopNavLevel title={"My Courses"} iconType={shoppingbag} pathlink={"/home/cart"} />
                    <Courses />
                    <BottomBar currentTab={'courses'} />
                </Route>
                <Route path="/home/account">
                    <TopNavLevel title={"Account"} />
                    <Account />
                    <BottomBar currentTab={'account'} />
                </Route>

                <Route path="/home/cart" >
                    <SubNavLevel title={"Cart"} iconType={faShoppingBag} />
                    <Cart />
                </Route>
            </Switch>
        </div>
        </Router>
    )
}

export default Home
