import React, { Component } from "react";
// import { Form } from 'semantic-ui-react'
import "./register.css";
import firebase from "firebase";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class register extends Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      lname: "",
      id: "",
      email: "",
      username: "",
      password: "",
      cpassword: "",
      uid: "",
      nation: "",
      type: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit(event) {
    var user = firebase.auth().currentUser;
    try {
      if (this.state.password != this.state.cpassword) {
        alert("รหัสผ่านไม่ตรงกัน");
      } else {
        if (this.state.id.length == 13) {
          // alert(this.state.id.length);
          firebase
            .auth()
            .createUserWithEmailAndPassword(
              this.state.email,
              this.state.password
            )
            .then(async (user) => {
              console.log(user.user.uid);
              await this.setState({
                uid: user.user.uid,
              });
            })
            .then(() => {
              console.log(this.state.uid);
              firebase
                .database()
                .ref("User")
                .child(this.state.uid)
                .set({
                  fname: this.state.fname,
                  lname: this.state.lname,
                  id: this.state.id,
                  email: this.state.email,
                  is_admin: "",
                  paid: {
                    status: 0,
                    timestamp: "31/6/2021",
                    img: "",
                    price:2000,
                    type:0
                  },
                  nation: "Thai",
                  type: 5,
                });
              alert("สมัครสำเร็จ !");
            })
            .catch((error) => {
              // Handle Errors here.
              alert(error);
            });
        }
      }
    } catch (err) {
      alert(err);
    }
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <a href="/">
              <img src="/images/head.png" width="500px" />
            </a>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <img src="/images/register.png" width="30px" />
                  <Link className="nav-link" to={"/register"}>
                    REGISTER
                  </Link>
                </li>
                <li className="nav-item">
                  <img src="/images/login.png" width="30px" />
                  <Link className="nav-link" to={"/sign-in"}>
                    LOGIN
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="id">
                  ID Card / Passport No.<span>*</span>
                </label>
                {/* <input type="id" class="form-control" id="id" name="idcard" placeholder="ex.1103702411xxx....."/> */}
                <input
                  type="text"
                  class="form-control"
                  placeholder="1103702411xxx"
                  onChange={this.handleChange}
                  name="id"
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="first-name">
                  First Name <span>*</span>
                </label>
                <input
                  type="first-name"
                  class="form-control"
                  id="first-name"
                  placeholder="Chalinee"
                  onChange={this.handleChange}
                  name="fname"
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="last-name">
                  Last Name <span>*</span>
                </label>
                <input
                  type="last-name"
                  class="form-control"
                  id="last-name"
                  placeholder="Traiyapanjawit"
                  onChange={this.handleChange}
                  name="lname"
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6 ">
                <label for="input-email">
                  Email <span>*</span>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="input-email"
                  placeholder="Email"
                  onChange={this.handleChange}
                  name="email"
                />
              </div>
            </div>

            <div class="form-group">
              <label for="inputpassword">
                Password <span>*</span>
              </label>
              <input
                type="password"
                class="form-control"
                id="inputpassword"
                placeholder="••••••••"
                onChange={this.handleChange}
                name="password"
              />
            </div>

            <div class="form-group">
              <label for="inputconfirm">
                Confirm Password <span>*</span>
              </label>
              <input
                type="password"
                class="form-control"
                id="inputconfirm"
                placeholder="••••••••"
                onChange={this.handleChange}
                name="cpassword"
              />
            </div>

            <div align="right">
              <button type="submit" class="btn btn-secondary ">
                SUBMIT
              </button>
            </div>

            <p className="have-account">
              You have an account?
              <Link to={"/sign-in"}>
                <a href="#">Sign In</a>
              </Link>
            </p>
          </div>
        </div>
      </form>
    );
  }
}
