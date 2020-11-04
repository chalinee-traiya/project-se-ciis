import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import { makeStyles, withStyles } from '@material-ui/core/styles';
// import Stepper from '@material-ui/core/Stepper';
// import Step from '@material-ui/core/Step';
// import StepLabel from '@material-ui/core/StepLabel';
// import StepConnector from '@material-ui/core/StepConnector';
// import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import Home from "./components/payment1";
// import Home from "./components/test";
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import Status from './components/Status_page';
import Payment from './components/Payment';
import Edit from './components/Edit';
import Form from './components/form/form';
import { ReturnAdmin } from './components/login';
// import { auth,db } from '../../services/firebase';

// import Navbar from './sidebar/Navbar';

// import Signup from "./components/signup";

// export const fetchdaily =async ()=>{
//   try {
//     db.ref('Admin/').on("value",snapshot => {
//       snapshot.forEach(snap => {
//         if(snap.val().uid === "Unpair")
//         {
//           Resercherlist.push(snap.val());
//         }
//         // {console.log(snap.key)}
//       })
//       // console.log(Resercherlist);
//       this.setState({datalist : Resercherlist});
//     })

//     console.log(data.data)
//       return data.data
//   } catch (error) {
//       console.log(error)
//   }
// }

export default class App extends React.Component {
  // const [ isAdmin,setisAdmin] =useState(false);

  // useEffect(async()=>{
  //   const fetchAPI =async ()=>{
  //     setisAdmin(await fetchIsadmin())
  //   }
  //  await fetchAPI();
  //  console.log("Change state : "+isAdmin)

  // },[setisAdmin])
  state = {
    isAdmin: false,
  };
  // async componentDidMount(){
  //   this.setState({isAdmin:await ReturnAdmin()})
  //   console.log("Call this")
  // }
  render() {
    return (
      <Router>
        <div className="App">
          {/* <Navbar />   */}

          {/* {this.isAdmin?  */}
          <Switch>
            <Route exact path="/" component={Form} />
            <Route path="/sign-in" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/status" component={Status} />
            <Route path="/payment" component={Payment} />
            <Route path="/edit" component={Edit} />
          </Switch>
          {/* <Switch>
            <Route exact path='/' component={Edit} />
            <Route path="/sign-in" component={Login} />
            <Route path="/register" component={Register} />
            <Route path='/status' component={Status} />
            <Route path='/payment' component={Payment} />
            <Route path='/edit' component={Home} />
            </Switch> */}
          {/* } */}
          {/* <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/sign-in" component={Login} />
            <Route path="/register" component={Register} />
            <Route path='/status' component={Status} />
            <Route path='/payment' component={Payment} />
            <Route path='/edit' component={Edit} />
            </Switch> */}
        </div>
      </Router>
    );
  }
}
