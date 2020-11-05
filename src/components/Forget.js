import React, { Component } from "react";
// import { Form } from 'semantic-ui-react'
import "./register.css";
import firebase from "firebase";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Forget extends Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      lname: "",
      id: "",
      email: "",
      password: "",
      cpassword: "",
      uid: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit(event) {
    console.log(this.state.email);
    var auth = firebase.auth();
    auth
      .sendPasswordResetEmail(this.state.email)
      .then(() => {
        alert("ระบบส่งลิงค์สำหรับรีเซ็ทรหัสผ่านไปใน Email ของคุณแล้ว !");
      })
      .catch(function (error) {
        // An error happened.
      });
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
            <div>
              <h1>FORGETPASSWORD</h1>
              <div className="under-register">
                <p>FORGETPASSWORD</p>
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
            <div align="right">
              <button type="submit" class="btn btn-secondary ">
                SEND
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
