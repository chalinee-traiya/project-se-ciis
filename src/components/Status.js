import React from "react";
import Navbar from "../sidebar/Navbar";
import Table from "react-bootstrap/Table";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import firebase from "firebase";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PrintBill from "./PrintBill";
// const useStyles = makeStyles((theme) => ({
//   button: {
//     margin: theme.spacing(1),
//   },
// }));
class Status extends React.Component {
  // const classes = useStyles();
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      paid: "",
    };
  }

  async componentDidMount() {
    var user = firebase.auth().currentUser;
    if (user != null) {
      firebase
        .database()
        .ref("/User/" + user.uid)
        .once("value")
        .then((snapshot) => {
          localStorage.setItem("fname", snapshot.val().fname);
          localStorage.setItem("lname", snapshot.val().lname);
          this.setState({
            email: snapshot.val().lname
          });
          if (snapshot.val().paid.status == 0) {
            this.setState({
              paid: "ยังไม่จ่าย",
            });
          } else {
            if (snapshot.val().paid.status == 1) {
              this.setState({
                paid: "รอตรวจสอบ",
              });
            } else {
              if (snapshot.val().paid.status == 2) {
                this.setState({
                  paid: "จ่ายแล้ว",
                });
              } else {
                if (snapshot.val().paid.status == 3) {
                  this.setState({
                    paid: "ยกเลิก",
                  });
                }
              }
            }
          }
          // var username =
          //   (snapshot.val() && snapshot.val().username) || "Anonymous";
          // // ...
        });
      firebase
        .database()
        .ref("/usersCSV/")
        .once("value")
        .then((snapshot) => {
          snapshot.forEach(element => {
            console.log(element.val().email);
            if(element.val().email == this.state.email){
              
            }
          });

        });
    } else {
      window.location.href = "/sign-in";
    }
  }
  check = () => {
    if (this.state.paid != "จ่ายแล้ว") {
      alert(this.state.paid);
    } else {
    }
  };
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
        <Navbar />
        <div class="Status col-8 mx-auto mt-5">
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
                <td>{this.state.paid}</td>
              </tr>
            </tbody>
          </Table>
          <div>
            <Button
              variant="contained"
              color="default"
              // className={classes.button}
              startIcon={<ConfirmationNumberIcon />}
              onClick={this.check}
            >
              Ticket
              {/* <PrintBill/> */}
            </Button>
          </div>
        </div>
      </>
    );
  }
}

export default Status;
