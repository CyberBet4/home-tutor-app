import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './Screens/Login'
import Signup from './Screens/Signup'
import Home from './Screens/Home'
import React from 'react'
import AccessProfileDetails from './components/AccessProfileDetails'


function App() {
  return (
    <Router>
      <div className="container-fluid p-0">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />

          <AccessProfileDetails>
            <Route path="/home" component={Home} />
          </AccessProfileDetails>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
