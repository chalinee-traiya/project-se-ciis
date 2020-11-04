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
  test() {
    firebase
      .database()
      .ref("/Check/")
      .once("value")
      .then((snapshot) => {
        console.log(snapshot.val());
        // var username =
        //   (snapshot.val() && snapshot.val().username) || "Anonymous";
        // // ...
      });
  }
  handleChange(evt) {
    // this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit(event) {
    var user = firebase.auth().currentUser;
    // console.log(
    //    this.state.fname +
    //     this.state.lname +
    //     this.state.id +
    //     this.state.email +
    //     this.state.username +
    //     this.state.password +
    //     this.state.cpassword
    // );
    // console.log(this.state.select);
    firebase
      .database()
      .ref("/Check/")
      .once("value")
      .then((snapshot) => {
        // console.log(snapshot.val());
        try {
          if (this.state.password != this.state.cpassword) {
            alert("รหัสผ่านไม่ตรงกัน");
          } else {
            snapshot.forEach((element) => {
              if (element.Email == this.state.email) {
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
                        username: this.state.username,
                        is_admin: "",
                        paid: {
                          status: 0,
                          timestamp: "",
                          img: "",
                        },
                        nation: this.state.nation,
                        type: "",
                      });
                    alert("สมัครสำเร็จ !");
                  })
                  .catch((error) => {
                    // Handle Errors here.
                    alert(error);
                  });
              }
            });
          }
        } catch (err) {
          alert(err);
        }
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
                  <option selected>Choose ...</option>
                  <option value="1">
                    Author / Regular Full Paper (Thai Only)
                  </option>
                  <option value="2">
                    Author / Virtual Full Paper(Thai & Foreign)
                  </option>
                  <option value="3">
                    Author / Regular Short Paper (Thai Only)
                  </option>
                  <option value="4">
                    Author / Virtual Short Paper (Thai & Foreign)
                  </option>
                  <option value="5">Participant (Thai Only)</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label for="inputusername">
                Create Username <span>*</span>
              </label>
              <input
                type="username"
                class="form-control"
                id="inputusername"
                placeholder="chalinee1234"
                onChange={this.handleChange}
                name="username"
              />
            </div>

            <div class="form-group">
              <label for="inputpassword">
                Create Password <span>*</span>
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
