import React from 'react';



import Navbar from '../sidebar/Navbar';
import Table from 'react-bootstrap/Table'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import Status from './Status'
import Status_admin from './Status_admin'
import { auth, db } from '../services/firebase';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'


const asyncFunc = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve(false), 4000);

    });
  };


export default class  Status_page extends React.Component  {

    state={
        isAdmin:false,
        isLoaded:true
    }
    async check(){
        db.ref('Admin/').on("value", snapshot => {
            snapshot.forEach((snap) => {
              console.log(snap.key)
              var Uid = snap.key;
              var user= localStorage.getItem("UID-login")
              if (user == Uid) {
                console.log("I'm Admin")
                this.setState({ isAdmin: true })


                
              }
              else {
                console.log("Not admin")
              }
            })

          })
    }
  async  componentDidMount(){
    this.setState({isAdmin:await this.check()})
    const isLoaded = await asyncFunc();
    this.setState({ isLoaded });
    
    }

  render(){
  return (

    
    <div className="App">
        {   this.state.isLoaded ? 
         (<Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} //3 secs
 
      /> ):(<div className="App">  {this.state.isAdmin ?   <Status_admin/> :<Status/>} </div> )}
        
      
        


    
            
           
          
    </div>
  )
    }
};

