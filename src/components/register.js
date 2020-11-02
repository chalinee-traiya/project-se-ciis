import React, { Component } from 'react';
// import { Form } from 'semantic-ui-react'
import './register.css';

import { BrowserRouter as Link } from 'react-router-dom';

export default class register extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ idcard: event.target.idcard });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.idcard);
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
                  <Link className="nav-link" to={'/register'}>
                    REGISTER
                  </Link>
                </li>
                <li className="nav-item">
                  <img src="/images/login.png" width="30px" />
                  <Link className="nav-link" to={'/sign-in'}>
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
                <label for="id">
                  ID Card / Passport No.<span>*</span>
                </label>
                {/* <input type="id" class="form-control" id="id" name="idcard" placeholder="ex.1103702411xxx....."/> */}
                <input
                  type="text"
                  class="form-control"
                  value={this.state.idcard}
                  onChange={this.handleChange}
                  placeholder="ex. 1103702411xxx....."
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
                  placeholder="Your First-Name - ex.Chalinee......"
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
                  placeholder="Your Last-Name - ex.Traiyapanjawit......"
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
                />
              </div>

              <div class="form-group col-md-6">
                <label for="inputState">
                  Type identity verification <span>*</span>
                </label>
                <select id="inputState" class="form-controldrop">
                  <option selected>Choose ...</option>
                  <option>Author / Regular Full Paper (Thai Only)</option>
                  <option>Author / Virtual Full Paper(Thai & Foreign)</option>
                  <option>Author / Regular Short Paper (Thai Only)</option>
                  <option>Author / Virtual Short Paper (Thai & Foreign)</option>
                  <option>Participant (Thai Only)</option>
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
                placeholder="ex.chalinee......"
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
                placeholder="ex.Chalinee1234....."
              />
            </div>

            <div class="form-group">
              <label for="inputconfirm">
                Confirm Password <span>*</span>
              </label>
              <input
                type="confirm-password"
                class="form-control"
                id="inputconfirm"
                placeholder="Chalinee1234......"
              />
            </div>

            <div align="right">
              <button
                onclick="Click()"
                type="submit"
                class="btn btn-secondary "
              >
                SUBMIT
              </button>
            </div>

            <p className="have-account">
              You have an account?
              <Link to={'/sign-in'}>
                <a href="#">Sign In</a>
              </Link>
            </p>
          </div>
        </div>
      </form>
    );
  }
}
