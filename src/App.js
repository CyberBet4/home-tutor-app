import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import '../src/css/style.css'
import Login from './Screens/Login'
import Signup from './Screens/Signup'
import Home from './Screens/Home'
import React from 'react'
import Auth from './Auth'


function App() {
  return (
    <Router>
      
      <div className="container-fluid p-0">
        <Switch>
          <Auth>
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/home" component={Home} />
          </Auth>
        </Switch>
      </div>
      
    </Router>
  );
}

export default App;
