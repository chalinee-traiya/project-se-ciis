import React from "react";
import Navbar from "../sidebar/Navbar";
import Table from "react-bootstrap/Table";
import { makeStyles } from "@material-ui/core/styles";
import Btnpayment from "./btnpayment";
import Button from "@material-ui/core/Button";
import "./payment.css";
import firebase from "firebase";

class Payment extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      paid: "",
      col1: "",
      col2: "",
      head1: "",
      head2: "",
      date: "",
      price: "",
    };
  }
  useStyles = makeStyles((theme) => ({
    button: {
      marginTop: 100,
      margin: theme.spacing(1),
    },
  }));
  async componentDidMount() {
    var d = new Date();
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
            email: snapshot.val().email,
            date: snapshot.val().paid.timestamp,
          });
          if (snapshot.val().type == 5) {
            this.setState({
              head1: "Type",
              head2: "Price",
              col1: "On-site-Participant",
              col2: 2000,
            });
          } else {
            firebase
              .database()
              .ref("/test/")
              .once("value")
              .then((snapshot) => {
                snapshot.forEach((element) => {
                  var date = this.state.date.split("/");

                  element.forEach((element1) => {
                    console.log(element1);
                  });
                  if (element.val().email == this.state.email) {
                    console.log("789");
                    var x = new Date(
                      d.getFullYear(),
                      d.getMonth() + 1,
                      d.getDate()
                    );
                    var y = new Date(date[2], date[1], date[0]);
                    // console.log( x > y);
                    // console.log(element.val());
                    if (x > y) {
                      // console.log("789");
                      console.log(element.val().af_price);
                      this.setState({
                        price: element.val().af_price,
                      });
                    } else {
                      console.log("123");
                      this.setState({
                        head1: "Research ID",
                        head2: "Price",
                        col1: element.val().paper_id,
                        col2: element.val().be_price,
                      });
                    }
                    // console.log(this.state.price);
                    // console.log(element.val().be_price);
                    // console.log(d.getDate(),parseInt(date[0]) );
                    // console.log(d.getMonth()+1,parseInt(date[1]));
                    // console.log(d.getFullYear(),parseInt(date[2]));
                  }
                });
              });
          }
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
    } else {
      window.location.href = "/sign-in";
    }
  }

  /////////upfile//////////////////////////
  // state = {
  //   // Initially, no file is selected
  //   selectedFile: null,
  //   isPayment: false,
  //   paid: "",
  // };

  onClickBtn = () => {
    this.setState({ isPayment: !this.state.isPayment });
    window.open('/form', '_blank');
  };

  render() {
    const { isPayment } = this.state;
    return (
      <div className="payment">
        <Navbar />
        <div class="col-8 mx-auto mt-5">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ชื่องาน</th>
                <th>{this.state.head1}</th>
                <th>{this.state.head2}</th>

                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>CiiS</th>
                <td>{this.state.col1}</td>
                <td>{this.state.col2}</td>

                <td>{this.state.paid}</td>
              </tr>
            </tbody>
          </Table>
          {isPayment ? (
            <Btnpayment />
          ) : (
            <div>
              {/* <div>
  <input type='radio' id='radioFood' name='radioFood' value='radioFood'

    checked={this.state.selected === 'Food'} />
    <label for="radioFood">Food</label>
    </div> */}

              <div>
                <input
                  type="radio"
                  id="radio-1"
                  name="myRadio"
                  value="radio-1"
                  checked={this.state.selected === "radio-1"}
                  onChange={(e) => this.setState({ selected: e.target.value })}
                />
                <img src="/images/paypal.png" width="80px" />

                <input
                  type="radio"
                  id="radio-2"
                  name="myRadio"
                  value="radio-2"
                  checked={this.state.selected === "radio-2"}
                  onChange={(e) => this.setState({ selected: e.target.value })}
                />
                <img src="/images/tmb.png" width="80px" />
              </div>

              <div>
                <Button
                  onClick={this.onClickBtn}
                  variant="contained"
                  color="default"
                  className={this.useStyles.button}
                >
                  Confirm
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Payment;
