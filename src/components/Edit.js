import React, { Component } from "react";
import Navbar from "../sidebar/Navbar";

import firebase from "firebase";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Edit extends Component {
  state = {
    // Initially, no file is selected
    selectedFile: null,
    isPayment: false,
    fname: "",
    lname: "",
    email: "",
    id: "",
    type: "",
    nation: "",
  };
  async componentDidMount() {
    var user = firebase.auth().currentUser;
    if (user != null) {
      return firebase
        .database()
        .ref("/User/" + user.uid)
        .once("value")
        .then((snapshot) => {
          console.log(snapshot.val());
          this.setState({
            fname: snapshot.val().fname,
            lname: snapshot.val().lname,
            email: snapshot.val().email,
            id: snapshot.val().id,
            type: snapshot.val().type,
            nation: snapshot.val().nation,
          });
          // var username =
          //   (snapshot.val() && snapshot.val().username) || "Anonymous";
          // // ...
        });
    } else {
      window.location.href = "/sign-in";
    }
  }
  /////////////////////////////nan//////////////////////////////
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
              <h1>Register</h1>
              <div className="under-register">
                <p>Register on the platform </p>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <div>
                  <label for="inputEmail4">
                    Nationality <span>*</span>
                  </label>
                </div>

                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="Thai"
                    onChange={this.handleChange}
                    name="nation"
                    checked={this.state.nation == "Thai"}
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
                    value="Foreign"
                    onChange={this.handleChange}
                    name="nation"
                    checked={this.state.nation == "Foreign"}
                  />
                  <label class="form-check-label" for="inlineRadio2">
                    Foreign
                  </label>
                </div>
              </div>
              <div class="form-group col-md-6">
                <label for="id">
                  ID Card / Passport No.<span>*</span>
                </label>
                {/* <input type="id" class="form-control" id="id" name="idcard" placeholder="ex.1103702411xxx....."/> */}
                <input
                  type="text"
                  class="form-control"
                  placeholder="ex.1103702411xxx....."
                  onChange={this.handleChange}
                  name="id"
                  value={this.state.id}
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
                  value={this.state.fname}
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
                  value={this.state.lname}
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
                  value={this.state.email}
                  disabled
                />
              </div>

              <div class="form-group col-md-6">
                <label for="inputState">
                  Type identity verification <span>*</span>
                </label>
                <select
                  id="inputState"
                  class="form-controldrop"
                  onChange={this.handleChange}
                  name="type"
                  required
                >
                  <option value="1" selected = {this.state.type == 1}>
                    Author / Regular Full Paper (Thai Only)
                  </option>
                  <option value="2" selected = {this.state.type == 2}>
                    Author / Virtual Full Paper(Thai & Foreign)
                  </option>
                  <option value="3" selected = {this.state.type == 3}>
                    Author / Regular Short Paper (Thai Only)
                  </option>
                  <option value="4" selected = {this.state.type == 4}>
                    Author / Virtual Short Paper (Thai & Foreign)
                  </option>
                  <option value="5" selected = {this.state.type == 5}>Participant (Thai Only)</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label for="inputpassword">
                Create Password <span>*</span>
              </label>
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
              <label for="inputconfirm">
                Confirm Password <span>*</span>
              </label>
              <input
                type="password"
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
