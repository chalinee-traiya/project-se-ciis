import React from 'react';
import Navbar from '../sidebar/Navbar';
import Table from 'react-bootstrap/Table'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import axios from 'axios'; 
import Btnpayment from './btnpayment';
import Payment1 from './payment1';

import { TimerSharp } from '@material-ui/icons';

class Payment extends React.Component {
   useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  
  /////////upfile//////////////////////////
  state = { 
  
    // Initially, no file is selected 
    selectedFile: null,
    isPayment:false
  };
  onFileChange = event => { 
     
    // Update the state 
    this.setState({ selectedFile: event.target.files[0] }); 
   
  }; 
  onFileUpload = () => { 
    // this.setState({isPayment: !this.state.isPayment})
    console.log(this.isPayment)
  //   // Create an object of formData 
  //   const formData = new FormData(); 
   
  //   // Update the formData object 
  //   formData.append( 
  //     "myFile", 
  //     this.state.selectedFile, 
  //     this.state.selectedFile.name 
  //   ); 
   
  //   // Details of the uploaded file 
  //   console.log(this.state.selectedFile); 
   
  //   // Request made to the backend api 
  //   // Send formData object 
  //   // axios.post("api/uploadfile", formData); 
   }; 
   onClickBtn=()=>{
    this.setState({isPayment: !this.state.isPayment})
   }


render(){
  const{isPayment}=this.state;
  return (

    <div className='payment'>
        <Navbar />  
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>Research ID</th>
      <th>Research Name</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>000000</td>
      <td>Register</td>
      <td>Wait</td>
    </tr>
  </tbody>
</Table>
{isPayment ? <Btnpayment/>:<div>
    <button onClick={this.onClickBtn}>Click me</button>
  
</div>
}
    


    </div>
  );
}
}

export default Payment;