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
import Home from "./components/test"; 
//import Home from "./components/Home"
import Login from "./components/Login";
import Register from "./components/Register";
import Status from "./components/Status";
import Payment from "./components/Payment";
import Edit from "./components/Edit";
// import Navbar from './sidebar/Navbar';

// import Signup from "./components/signup";


const App = () => {
  return (

    <Router>
    <div className="App">
      
      
    {/* <Navbar />   */}
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/sign-in" component={Login} />
            <Route path="/register" component={Register} />
            <Route path='/status' component={Status} />
            <Route path='/payment' component={Payment} />
            <Route path='/edit' component={Edit} />
          </Switch>
    </div></Router>
  )
};

export default App;
