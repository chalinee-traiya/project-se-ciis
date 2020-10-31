import React from 'react';
import Navbar from '../sidebar/Navbar';
import Table from 'react-bootstrap/Table'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function Status() {
  const classes = useStyles();

  return (

    <div className='status'>
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
    <tr>
      <td>111111</td>
      <td>Chatbot</td>
      <td>Wait</td>
    </tr>
  </tbody>
</Table>
<div>
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<ConfirmationNumberIcon  />}
      >
        Ticket
      </Button>
</div>
    </div>
  );
}

export default Status;