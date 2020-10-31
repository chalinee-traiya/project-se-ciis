import React from 'react';
import Navbar from '../sidebar/Navbar';
import Table from 'react-bootstrap/Table'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import axios from 'axios'; 


class test extends React.Component {
   useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  
  /////////upfile//////////////////////////
  state = { 
  
    // Initially, no file is selected 
    selectedFile: null
  };
  onFileChange = event => { 
     
    // Update the state 
    this.setState({ selectedFile: event.target.files[0] }); 
   
  }; 
  onFileUpload = () => { 
     
    // Create an object of formData 
    const formData = new FormData(); 
   
    // Update the formData object 
    formData.append( 
      "myFile", 
      this.state.selectedFile, 
      this.state.selectedFile.name 
    ); 
   
    // Details of the uploaded file 
    console.log(this.state.selectedFile); 
   
    // Request made to the backend api 
    // Send formData object 
    axios.post("api/uploadfile", formData); 
  }; 


render(){
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

<div>
                            
    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
    <img src="images/tmb.png" alt="" class="footer" />
</div> 

<div>                       
    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
    <img src="images/paypal.png" alt="" class="footer" />

</div>

<div> 
    <input type="file" onChange={this.onFileChange} /> 
        
        <Button
        onClick={this.onFileUpload}
        variant="contained"
        color="default"
        className={this.useStyles.button}
        startIcon={<CloudUploadIcon  />}
      >
        Upload Slip
      </Button>
</div> 

    </div>
  );
}
}

export default test;