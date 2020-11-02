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
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit(event) {
    console.log(
      this.state.fname +
        this.state.lname +
        this.state.id +
        this.state.email +
        this.state.username +
        this.state.password +
        this.state.cpassword
    );
    try {
      if (this.state.password != this.state.cpassword) {
        alert("รหัสผ่านไม่ตรงกัน");
      } else {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {

            })
            .catch((error) => {
              // Handle Errors here.
              alert(error);
            });
        firebase.database().ref("User").push({
          fname: this.state.fname,
          lname: this.state.lname,
          id: this.state.id,
          email: this.state.email,
          username: this.state.username,
        });
        alert("สมัครสำเร็จ !");
      }
    } catch (err) {
      alert(err);
    }

    event.preventDefault();
  }

  render() {
    return (
      // <form onSubmit={this.handleSubmit}>
      //   <label>Email</label>
      //   <input type="text" name="email" onChange={this.handleChange} />

      //   <label>Password</label>
      //   <input type="password" name="password" onChange={this.handleChange} />
      //   <input type="submit" value="Submit" />
      // </form>
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
              <h1>Register</h1>
              <div className="under-register">
                <p>Register on the platform </p>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <div>
                  <label for="inputEmail4">Nationality *</label>
                </div>

                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineRadio1">
                    Thai
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineRadio2">
                    Foreign
                  </label>
                </div>
              </div>
              <div class="form-group col-md-6">
                <label for="id">ID Card / Passport No. *</label>
                {/* <input type="id" class="form-control" id="id" name="idcard" placeholder="ex.1103702411xxx....."/> */}
                <input
                  type="text"
                  class="form-control"
                  placeholder="ex.1103702411xxx....."
                  onChange={this.handleChange}
                  name="id"
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="first-name">First Name *</label>
                <input
                  type="first-name"
                  class="form-control"
                  id="first-name"
                  placeholder="Your First-Name - ex.Chalinee......"
                  onChange={this.handleChange}
                  name="fname"
                />
              </div>

              <div class="form-group col-md-6">
                <label for="last-name">Last Name *</label>
                <input
                  type="last-name"
                  class="form-control"
                  id="last-name"
                  placeholder="Your Last-Name - ex.Traiyapanjawit......"
                  onChange={this.handleChange}
                  name="lname"
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-6 ">
                <label for="input-email">Email *</label>
                <input
                  type="email"
                  class="form-control"
                  id="input-email"
                  placeholder="Email"
                  onChange={this.handleChange}
                  name="email"
                />
              </div>

              <div class="form-group col-md-6">
                <label for="inputState">Type identity verification *</label>
                <select id="inputState" class="form-controldrop">
                  <option selected>
                    Choose.......................................
                  </option>
                  <option>Author / Regular Full Paper (Thai Only)</option>
                  <option>Author / Virtual Full Paper(Thai & Foreign)</option>
                  <option>Author / Regular Short Paper (Thai Only)</option>
                  <option>Author / Virtual Short Paper (Thai & Foreign)</option>
                  <option>Participant (Thai Only)</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label for="inputusername">Create Username *</label>
              <input
                type="username"
                class="form-control"
                id="inputusername"
                placeholder="ex.chalinee......"
                onChange={this.handleChange}
                name="username"
              />
            </div>

            <div class="form-group">
              <label for="inputpassword">Create Password *</label>
              <input
                type="password"
                class="form-control"
                id="inputpassword"
                placeholder="ex.Chalinee1234....."
                onChange={this.handleChange}
                name="password"
              />
            </div>

            <div class="form-group">
              <label for="inputconfirm">Confirm Password *</label>
              <input
                type="confirm-password"
                class="form-control"
                id="inputconfirm"
                placeholder="Chalinee1234......"
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
