import React from 'react';
import Navbar from '../sidebar/Navbar';
import Table from 'react-bootstrap/Table';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import firebase from 'firebase';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// const useStyles = makeStyles((theme) => ({
//   button: {
//     margin: theme.spacing(1),
//   },
// }));
class Status extends React.Component {
  // const classes = useStyles();
  // constructor() {

  //   // super();
  //   // this.state = {
  //   //   email: "",
  //   //   password: "",
  //   // };
  //   // this.handleChange = this.handleChange.bind(this);
  //   // this.handleSubmit = this.handleSubmit.bind(this);
  // }
  render() {
    return (
      <>
        {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <a href="/">
              <img src="/images/head.png" width="500px" />
            </a>
          </div>
        </nav> */}
        <div className="Status">
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
              // className={classes.button}
              startIcon={<ConfirmationNumberIcon />}
            >
              Ticket
            </Button>
          </div>
        </div>
      </>
    );
  }
}

export default Status;
