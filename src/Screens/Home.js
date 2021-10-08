import React from 'react'
import 'animate.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BottomBar from '../components/BottomBar';
import HomeScreen from './Home/HomeScreen'
import Search from './Search'
import Courses from './Courses/Courses'
import Account from './Account/Account'

const Home = () => {
    
    // console.log(window.location.pathname);
    return (
        <Router>
        <div className="darkmode main">
            <Switch>
                <Route exact path="/home" >
                    <HomeScreen />
                    <BottomBar currentTab={'home'} />
                </Route>

                <Route path="/home/search">
                    <Search />
                    <BottomBar currentTab={'search'} />
                </Route>

                <Route path="/home/courses">
                    <Courses />
                    <BottomBar currentTab={'courses'} />
                </Route>
                <Route path="/home/account">
                    <Account />
                    <BottomBar currentTab={'account'} />
                </Route>
            </Switch>
        </div>
        </Router>
    )
}

export default Home
