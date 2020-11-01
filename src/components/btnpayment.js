import React from 'react';
import Navbar from '../sidebar/Navbar';
import Table from 'react-bootstrap/Table'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import axios from 'axios'; 
import {
    PopupboxManager,
    PopupboxContainer
  } from 'react-popupbox';

export default class btnpayment extends React.Component {
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
    
      /////popup/////
      updatePopupbox() {
        const content = (
          <div>
            <span>Update popupbox with new content and config</span>
            <button onClick={PopupboxManager.close}>Close</button>
          </div>
        )
    
        PopupboxManager.update({
          content,
          config: {
            titleBar: {
              text: 'Updated!'
            }
          }
        })
      }
      
      openPopupbox() {
        const content = (
          <div>
            <span>Open popupbox</span>
            <button onClick={this.updatePopupbox}>Update!</button>
          </div>
        )
    
        PopupboxManager.open({
          content,
          config: {
            titleBar: {
              enable: true,
              text: 'Step 1'
            },
            fadeIn: true,
            fadeInSpeed: 500
          }
        })
      }

    render(){
        return (
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
      
        
        );
      }

}