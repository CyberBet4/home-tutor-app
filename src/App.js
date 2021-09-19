import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './Screens/Login'
import Signup from './Screens/Signup'
import Home from './Screens/Home'
function App() {
  return (
    <Router>
      <div className="container-fluid p-0">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/home" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
