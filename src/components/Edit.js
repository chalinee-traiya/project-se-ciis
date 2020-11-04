import React, { Component } from "react";
import Navbar from "../sidebar/Navbar";

import firebase from "firebase";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Edit extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: "12345468788789",
  //     fname: "",
  //     lname: "",
  //     email: "",
  //     id: "",
  //     type: "",
  //     nation: "",
  //   };

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }
  // state = {
  //   // Initially, no file is selected
  // };
  // componentDidMount() {
  //   var user = firebase.auth().currentUser;
  //   if (user != null) {
  //     return firebase
  //       .database()
  //       .ref("/User/" + user.uid)
  //       .once("value")
  //       .then((snapshot) => {
  //         console.log(snapshot.val());
  //         this.setState({
  //           fname: snapshot.val().fname,
  //           lname: snapshot.val().lname,
  //           email: snapshot.val().email,
  //           id: snapshot.val().id,
  //           type: snapshot.val().type,
  //           nation: snapshot.val().nation,
  //         });
  //         // var username =
  //         //   (snapshot.val() && snapshot.val().username) || "Anonymous";
  //         // // ...
  //       });
  //   } else {
  //     window.location.href = "/sign-in";
  //   }
  // }
  // handleChange(evt) {
  //   this.setState({ [evt.target.name]: evt.target.value });
  // }
  // handleSubmit(event) {
  //   // console.log(
  //   //    this.state.fname +
  //   //     this.state.lname +
  //   //     this.state.id +
  //   //     this.state.email +
  //   //     this.state.username +
  //   //     this.state.password +
  //   //     this.state.cpassword
  //   // );
  //   // console.log(this.state.select);
  //   try {
  //     if (this.state.password != this.state.cpassword) {
  //       alert("รหัสผ่านไม่ตรงกัน");
  //     } else {
  //       firebase
  //         .auth()
  //         .createUserWithEmailAndPassword(this.state.email, this.state.password)
  //         .then(async (user) => {
  //           console.log(user.user.uid);
  //           await this.setState({
  //             uid: user.user.uid,
  //           });
  //         })
  //         .then(() => {
  //           console.log(this.state.uid);
  //           firebase
  //             .database()
  //             .ref("User")
  //             .child(this.state.uid)
  //             .set({
  //               fname: this.state.fname,
  //               lname: this.state.lname,
  //               id: this.state.id,
  //               email: this.state.email,
  //               username: this.state.username,
  //               is_admin: "",
  //               paid: {
  //                 status: 0,
  //                 timestamp: "",
  //                 img: "",
  //               },
  //               nation: this.state.nation,
  //               type: this.state.type,
  //             });
  //           alert("สมัครสำเร็จ !");
  //         })
  //         .catch((error) => {
  //           // Handle Errors here.
  //           alert(error);
  //         });
  //     }
  //   } catch (err) {
  //     alert(err);
  //   }

  //   event.preventDefault();
  // }

  // /////////////////////////////nan//////////////////////////////
  // render() {
  //   return (
  //     <form onSubmit={this.handleSubmit}>
  //       <input
  //         type="text"
  //         value={this.state.value}
  //         onChange={this.handleChange}
  //       />
  //       <nav className="navbar navbar-expand-lg navbar-light fixed-top">
  //         <div className="container">
  //           <a href="/">
  //             <img src="/images/head.png" width="500px" />
  //           </a>
  //           <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
  //             <ul className="navbar-nav ml-auto">
  //               <li className="nav-item">
  //                 <img src="/images/register.png" width="30px" />
  //                 <Link className="nav-link" to={"/register"}>
  //                   REGISTER
  //                 </Link>
  //               </li>
  //               <li className="nav-item">
  //                 <img src="/images/login.png" width="30px" />
  //                 <Link className="nav-link" to={"/sign-in"}>
  //                   LOGIN
  //                 </Link>
  //               </li>
  //             </ul>
  //           </div>
  //         </div>
  //       </nav>
  //       <div className="auth-wrapper">
  //         <div className="auth-inner">
  //           <div>
  //             <h1>Register</h1>
  //             <div className="under-register">
  //               <p>Register on the platform </p>
  //             </div>
  //           </div>

  //           <div class="form-row">
  //             <div class="form-group col-md-6">
  //               <div>
  //                 <label for="inputEmail4">
  //                   Nationality <span>*</span>
  //                 </label>
  //               </div>

  //               <div class="form-check form-check-inline">
  //                 <input
  //                   class="form-check-input"
  //                   type="radio"
  //                   name="inlineRadioOptions"
  //                   id="inlineRadio1"
  //                   value="Thai"
  //                   onChange={this.handleChange}
  //                   name="newnation"
  //                   checked={this.state.nation == "Thai"}
  //                 />

  //                 <label class="form-check-label" for="inlineRadio1">
  //                   Thai
  //                 </label>
  //               </div>
  //               <div class="form-check form-check-inline">
  //                 <input
  //                   class="form-check-input"
  //                   type="radio"
  //                   name="inlineRadioOptions"
  //                   id="inlineRadio2"
  //                   value="Foreign"
  //                   onChange={this.handleChange}
  //                   name="newnation"
  //                   checked={this.state.nation == "Foreign"}
  //                 />
  //                 <label class="form-check-label" for="inlineRadio2">
  //                   Foreign
  //                 </label>
  //               </div>
  //             </div>
  //             <div class="form-group col-md-6">
  //               <label for="id">
  //                 ID Card / Passport No.<span>*</span>
  //               </label>
  //               {/* <input type="id" class="form-control" id="id" name="idcard" placeholder="ex.1103702411xxx....."/> */}
  //               <input
  //                 type="text"
  //                 class="form-control"
  //                 placeholder="ex.1103702411xxx....."
  //                 onChange={this.handleChange}
  //                 name="newid"
  //                 value={this.state.id}
  //               />
  //             </div>
  //           </div>
  //           <div class="form-row">
  //             <div class="form-group col-md-6">
  //               <label for="first-name">First Name *</label>
  //               <input
  //                 type="first-name"
  //                 class="form-control"
  //                 id="first-name"
  //                 placeholder="Your First-Name - ex.Chalinee......"
  //                 onChange={this.handleChange}
  //                 name="newfname"
  //                 value={this.state.fname}
  //               />
  //             </div>

  //             <div class="form-group col-md-6">
  //               <label for="last-name">Last Name *</label>
  //               <input
  //                 type="last-name"
  //                 class="form-control"
  //                 id="last-name"
  //                 placeholder="Your Last-Name - ex.Traiyapanjawit......"
  //                 onChange={this.handleChange}
  //                 name="newlname"
  //                 value={this.state.lname}
  //               />
  //             </div>
  //           </div>

  //           <div class="form-row">
  //             <div class="form-group col-md-6 ">
  //               <label for="input-email">Email *</label>
  //               <input
  //                 type="email"
  //                 class="form-control"
  //                 id="input-email"
  //                 placeholder="Email"
  //                 onChange={this.handleChange}
  //                 name="newemail"
  //                 value={this.state.email}
  //                 disabled
  //               />
  //             </div>

  //             <div class="form-group col-md-6">
  //               <label for="inputState">
  //                 Type identity verification <span>*</span>
  //               </label>
  //               <select
  //                 id="inputState"
  //                 class="form-controldrop"
  //                 onChange={this.handleChange}
  //                 name="newtype"
  //                 required
  //               >
  //                 <option value="1" selected={this.state.type == 1}>
  //                   Author / Regular Full Paper (Thai Only)
  //                 </option>
  //                 <option value="2" selected={this.state.type == 2}>
  //                   Author / Virtual Full Paper(Thai & Foreign)
  //                 </option>
  //                 <option value="3" selected={this.state.type == 3}>
  //                   Author / Regular Short Paper (Thai Only)
  //                 </option>
  //                 <option value="4" selected={this.state.type == 4}>
  //                   Author / Virtual Short Paper (Thai & Foreign)
  //                 </option>
  //                 <option value="5" selected={this.state.type == 5}>
  //                   Participant (Thai Only)
  //                 </option>
  //               </select>
  //             </div>
  //           </div>

  //           <div class="form-group">
  //             <label for="inputpassword">
  //               Create Password <span>*</span>
  //             </label>
  //             <input
  //               type="password"
  //               class="form-control"
  //               id="inputpassword"
  //               placeholder="ex.Chalinee1234....."
  //               onChange={this.handleChange}
  //               name="password"
  //             />
  //           </div>

  //           <div class="form-group">
  //             <label for="inputconfirm">
  //               Confirm Password <span>*</span>
  //             </label>
  //             <input
  //               type="password"
  //               class="form-control"
  //               id="inputconfirm"
  //               placeholder="Chalinee1234......"
  //               onChange={this.handleChange}
  //               name="cpassword"
  //             />
  //           </div>

  //           <div align="right">
  //             <button type="submit" class="btn btn-secondary ">
  //               SUBMIT
  //             </button>
  //           </div>

  //           <p className="have-account">
  //             You have an account?
  //             <Link to={"/sign-in"}>
  //               <a href="#">Sign In</a>
  //             </Link>
  //           </p>
  //         </div>
  //       </div>
  //     </form>
  //   );
  // }

  // -------------------------------------------------------------------------------
  // backup
  // -------------------------------------------------------------------------------
  constructor(props) {
    super(props);

    this.state = {
      value: "123456",
      value1: "456789",
      fname: "",
      lname: "",
      email: "",
      id: "",
      type: "",
      nation: "",
    };

    this.handleChangefname = this.handleChangefname.bind(this);
    this.handleChangelname = this.handleChangelname.bind(this);
    this.handleChangeemail = this.handleChangeemail.bind(this);
    this.handleChangeid = this.handleChangeid.bind(this);
    this.handleChangetype = this.handleChangetype.bind(this);
    this.handleChangenation = this.handleChangenation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
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
  handleChangefname(evt) {
    console.log("fname");
    // this.setState({ [evt.target.name]: evt.target.value });
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleChangelname(evt) {
    console.log("lname");
    // this.setState({ [evt.target.name]: evt.target.value });
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleChangeemail(evt) {
    console.log("email");
    // this.setState({ [evt.target.name]: evt.target.value });
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleChangeid(evt) {
    console.log("id");
    // this.setState({ [evt.target.name]: evt.target.value });
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleChangetype(evt) {
    console.log("type");
    // this.setState({ [evt.target.name]: evt.target.value });
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleChangenation(evt) {
    console.log("nation");
    // this.setState({ [evt.target.name]: evt.target.value });
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleSubmit(event) {
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
    try {
      var user = firebase.auth().currentUser;
      if (this.state.password != this.state.cpassword) {
        alert("รหัสผ่านไม่ตรงกัน");
      } else {
        var updates = {};
        updates["/User/" + user.uid + "/fname/"] = this.state.fname;
        updates["/User/" + user.uid + "/lname/"] = this.state.lname;
        updates["/User/" + user.uid + "/id/"] = this.state.id;
        updates["/User/" + user.uid + "/nation/"] = this.state.nation;
        updates["/User/" + user.uid + "/type/"] = this.state.type;
        firebase.database().ref().update(updates);
        firebase
        .auth()
        .signOut()
        .then(() => {
          window.location.href = "/sign-in";
        });


      }
    } catch (err) {
      alert(err);
    }

    event.preventDefault();
  }

  render() {
    return (
      <div className="edit">
      <Navbar />
      <form onSubmit={this.handleSubmit}>

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
                    onChange={this.handleChangenation}
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
                    onChange={this.handleChangenation}
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
                  onChange={this.handleChangeid}
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
                  onChange={this.handleChangefname}
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
                  onChange={this.handleChangelname}
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
                  onChange={this.handleChangeemail}
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
                  onChange={this.handleChangetype}
                  name="type"
                  required
                >
                  <option value="1" selected={this.state.type == 1}>
                    Author / Regular Full Paper (Thai Only)
                  </option>
                  <option value="2" selected={this.state.type == 2}>
                    Author / Virtual Full Paper(Thai & Foreign)
                  </option>
                  <option value="3" selected={this.state.type == 3}>
                    Author / Regular Short Paper (Thai Only)
                  </option>
                  <option value="4" selected={this.state.type == 4}>
                    Author / Virtual Short Paper (Thai & Foreign)
                  </option>
                  <option value="5" selected={this.state.type == 5}>
                    Participant (Thai Only)
                  </option>
                </select>
              </div>
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
      </div>
    );
  }
}
