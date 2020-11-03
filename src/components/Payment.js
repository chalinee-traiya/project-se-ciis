import React from 'react';
import Navbar from '../sidebar/Navbar';
import Table from 'react-bootstrap/Table'
import { makeStyles } from '@material-ui/core/styles';
import Btnpayment from './btnpayment';
import Button from '@material-ui/core/Button';
import './payment.css';

class Payment extends React.Component {
   useStyles = makeStyles((theme) => ({
    button: {
      marginTop:100,
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
      <th>Price</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>000000</td>
      <td>Register</td>
      <th>8000</th>
      <td>Wait</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td>Total</td>   
      <th>8000</th>
    </tr>
  </tbody>
</Table>



{isPayment ? <Btnpayment/>:<div>
 
  {/* <div>
  <input type='radio' id='radioFood' name='radioFood' value='radioFood'
   
    checked={this.state.selected === 'Food'} />
    <label for="radioFood">Food</label>
    </div> */}

  <div>
        <input type='radio' id='radio-1' name='myRadio' value='radio-1' 
          checked={this.state.selected === 'radio-1'} onChange={(e) => this.setState({ selected: e.target.value })} />
        <img src="/images/paypal.png" width="80px"  />
  
        <input type='radio' id='radio-2' name='myRadio' value='radio-2' 
          checked={this.state.selected === 'radio-2'} onChange={(e) => this.setState({ selected: e.target.value })} />
          <img src="/images/tmb.png" width="80px"  />
  </div>
  
  <div>
    <Button
      onClick={this.onClickBtn}
      variant="contained"
      color="default"
      className={this.useStyles.button}
      >
      Confirm
    </Button>
  </div>
</div>
}
    


    </div>
  );
}
}

export default Payment;