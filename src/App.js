import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import { makeStyles, withStyles } from '@material-ui/core/styles';
// import Stepper from '@material-ui/core/Stepper';
// import Step from '@material-ui/core/Step';
// import StepLabel from '@material-ui/core/StepLabel';
// import StepConnector from '@material-ui/core/StepConnector';
// import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
// import Signup from "./components/signup";


const App = () => {
  return (

    <Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
        <a href="/"><img src="/images/head.png" width="500px"/></a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <img src="/images/register.png" width="30px" />
                <Link className="nav-link" to={"/register"}>REGISTER</Link>
              </li> 
              <li className="nav-item">
                <img src="/images/login.png" width="30px" />
                <Link className="nav-link" to={"/sign-in"}>LOGIN</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/sign-in" component={Login} />
            <Route path="/register" component={Register} />

           

          </Switch>
    </div></Router>
  )
};

export default App;
