import React from "react";
import Navbar from "../sidebar/Navbar";
import Table from "react-bootstrap/Table";
import { makeStyles } from "@material-ui/core/styles";
import Btnpayment from "./btnpayment";
import Button from "@material-ui/core/Button";
import "./payment.css";
import firebase from "firebase";

class PaymentF extends React.Component {
  useStyles = makeStyles((theme) => ({
    button: {
      marginTop: 100,
      margin: theme.spacing(1),
    },
  }));
  async componentDidMount() {
    var user = firebase.auth().currentUser;
    if (user != null) {
      return firebase
        .database()
        .ref("/User/" + user.uid)
        .once("value")
        .then((snapshot) => {
          console.log(snapshot.val().paid);
          if (snapshot.val().paid.status == 0) {
            this.setState({
              paid: "ยังไม่จ่าย",
            });
          } else {
            if(snapshot.val().paid.status == 1){
              this.setState({
                paid: "รอตรวจสอบ",
              });
            }else{
              if(snapshot.val().paid.status == 2){
                this.setState({
                  paid: "จ่ายแล้ว",
                });
              }else{
                if(snapshot.val().paid.status == 3){
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
    }else{
      window.location.href = "/sign-in";
    }
  }

  /////////upfile//////////////////////////
  state = {
    // Initially, no file is selected
    selectedFile: null,
    isPayment: false,
    paid: "",
  };
  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };
  onFileUpload = () => {
    // this.setState({isPayment: !this.state.isPayment})
    console.log(this.isPayment);
    //   // Create an object of formData
    //   const formData = new FormData();

    //   // Update the formData object
    //   formData.append(
    //     "myFile",
    //     this.state.selectedFile,
    //     this.state.selectedFile.name
    //   );

    //   // Details of the uploaded file
    //   console.log(this.state.selectedFile);

    //   // Request made to the backend api
    //   // Send formData object
    //   // axios.post("api/uploadfile", formData);
  };
  onClickBtn = () => {
    this.setState({ isPayment: !this.state.isPayment });
  };

  render() {
    const { isPayment } = this.state;
    return (
      <div className="payment">
        <Navbar />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Research ID</th>
              <th>Research Name</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>000000</td>
              <td>Register</td>
              <th>8000</th>
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

              {/* <input
                type="radio"
                id="radio-2"
                name="myRadio"
                value="radio-2"
                checked={this.state.selected === "radio-2"}
                onChange={(e) => this.setState({ selected: e.target.value })}
              />
              <img src="/images/tmb.png" width="80px" /> */}
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
    );
  }
}

export default PaymentF;
