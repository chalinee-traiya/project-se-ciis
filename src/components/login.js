import React, { Component } from "react";
import "./login.css";
import { signin } from "../helpers/auth";
import firebase from "firebase";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(event) {
    console.log(this.state.email + this.state.password);
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(
          (user) => {
            var user = firebase.auth().currentUser;
            if (user != null) {
              window.location.href = "/status";
            }
            else{
              alert("else");
            }
          },
          (err) => {
            alert(err.message);
          }
        );
      event.preventDefault();
    } catch (err) {
      // alert(err);
    }

    event.preventDefault();
  }

  render() {
    return (
      <form autoComplete="off" onSubmit={this.handleSubmit}>
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
                  <Link className="nav-link" to={"/Status"}>
                    LOGIN
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper-log">
          <div className="auth-inner-log">
            <div class="text-center">
              <img src="/images/user.png" width="70px" />
            </div>
            <div className="textlog">
              <p>LOGIN</p>
            </div>

            <div className="form-group1">
              <label>Email or Username *</label>
            </div>

            <input
              type="email"
              className="form-control1"
              placeholder="email"
              onChange={this.handleChange}
              name="email"
            />

            <div className="form-group1">
              <label>Password *</label>
            </div>

            <input
              type="password"
              className="form-control1"
              placeholder="password"
              onChange={this.handleChange}
              name="password"
            />

            <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
            </p>

            {/* <Link to="/status">
                            <button type="button" class="btn1 btn-secondary ">SIGN IN</button>
                            </Link> */}

            <div className="form-group1">

              <button className="btn1 btn-secondary">Login</button>
            </div>

            <p className="dont-have-account">
              Don't have account?
              <Link to={"/register"}>
                <a href="#">Register</a>
              </Link>
            </p>
          </div>
        </div>
      </form>
    );
  }
}
