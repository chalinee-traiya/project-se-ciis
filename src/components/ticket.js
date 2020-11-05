import { Hidden } from "@material-ui/core";
import React, { Component } from "react";
import Printer, { print } from "react-pdf-print";
import "./ticket.css";
import firebase from "firebase";
// import img from "./components/form/img/Ticket.png";

class ticket extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      email: "",
      fname: "",
      lname: "",
    };
  }
  async componentDidMount() {
    var user = firebase.auth().currentUser;
    if (user != null) {
      console.log(user.uid);
       firebase
        .database()
        .ref("/User/" + user.uid)
        .once("value")
        .then((snapshot) => {
          // console.log(snapshot.val());
          this.setState({
            email: snapshot.val().email,
            fname: snapshot.val().fname,
            lname: snapshot.val().lname,
            id: snapshot.val().id,
          });
          firebase
            .database()
            .ref("/test/")
            .once("value")
            .then((snapshot) => {
              snapshot.forEach((element) => {
                if (element.val().email == this.state.email) {
                  this.setState({
                    paper_id: element.val().paper_id,
                    af_price: element.val().af_price,
                    be_price: element.val().be_price,
                  });
                  console.log(this.state.paper_id);
                } else {
                  console.log(9);
                }
              });
            });
          this.setState({
            paper_id: snapshot.val().paper_id,
            af_price: snapshot.val().af_price,
            be_price: snapshot.val().be_price,
          });
        });
    } else {
      // alert("456");
   
  }
}
  render() {
    const mystyle = {
      position: "absolute",
      
      top: "0px",
      width: "100%",
      height: "792px",
      borderStyle: "outset",
      overflow: "hidden",
    };

    return (
      <div style={mystyle}>
        <div style={{ position: "absolute", left: "0px", top: "0px" }}>
          {/* <img src={img} style={{ width: "612px", height: "792px" }} /> */}
          <img src="/images/Ticket.jpg" width="1000px"/>
        </div>
       
        <div
          style={{ position: "absolute", left: "357.48px", top: "70.83px" }}
          class="cls_003"
        >
          {/* <span class="cls_002"> (Name)</span> */}
          {/* <span class="cls_002">{this.state.user}</span> */}
          <span class="cls_003">{this.state.fname}</span>
          <span class="cls_003">{this.state.lname}</span>
        </div>
       
        <div
          style={{ position: "absolute", left: "357.48px", top: "90.43px" }}
          class="cls_002"
        >
          <span class="cls_003">Paper ID</span>
          <span class="cls_003">{this.state.paper_id}</span>
        </div>

      </div>
    );
  }
}

export default ticket;
