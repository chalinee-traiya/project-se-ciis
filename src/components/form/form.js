import { Hidden } from "@material-ui/core";
import React, { Component } from "react";
import Printer, { print } from "react-pdf-print";
import "./form.css";
import firebase from "firebase";
import img from "./img/background1.jpg";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      email: "",
      fname: "",
      lname: "",
      id: "",
      paper_id: "",
      af_price: "",
      be_price: "",
    };
  }
  async componentDidMount() {
    var user = firebase.auth().currentUser;
    if (user != null) {
      console.log(user.uid);
       firebase
        .database()
        .ref("/User/" + user.uid)
        .once("value")
        .then((snapshot) => {
          // console.log(snapshot.val());
          this.setState({
            email: snapshot.val().email,
            fname: snapshot.val().fname,
            lname: snapshot.val().lname,
            id: snapshot.val().id,
          });
          firebase
            .database()
            .ref("/test/")
            .once("value")
            .then((snapshot) => {
              snapshot.forEach((element) => {
                if (element.val().email == this.state.email) {
                  this.setState({
                    paper_id: element.val().paper_id,
                    af_price: element.val().af_price,
                    be_price: element.val().be_price,
                  });
                  console.log(this.state.paper_id);
                } else {
                  console.log(9);
                }
              });
            });
          this.setState({
            paper_id: snapshot.val().paper_id,
            af_price: snapshot.val().af_price,
            be_price: snapshot.val().be_price,
          });
        });
    } else {
      // alert("456");
    }
  }
  render() {
    const mystyle = {
      position: "absolute",
      left: "50%",
      marginLeft: "-306px",
      top: "0px",
      width: "612px",
      height: "792px",
      borderStyle: "outset",
      overflow: "hidden",
    };

    return (
      <div style={mystyle}>
        <div style={{ position: "absolute", left: "0px", top: "0px" }}>
          <img src={img} style={{ width: "612px", height: "792px" }} />
        </div>
        <div
          style={{ position: "absolute", left: "250.44px", top: "36.83px" }}
          class="cls_003"
        >
          <span class="cls_003">สาขาผู้รับฝาก</span>
        </div>
        <div
          style={{ position: "absolute", left: "453.83px", top: "36.83px" }}
          class="cls_003"
        >
          <span class="cls_003">วันที่</span>
        </div>
        <div
          style={{ position: "absolute", left: "399.84px", top: "63.95px" }}
          class="cls_003"
        >
          <span class="cls_003">โปรดระบุรายละเอียด</span>
          <span class="cls_004">ผู้สมัคร</span>
        </div>
        <div
          style={{ position: "absolute", left: "111.72px", top: "68.99px" }}
          class="cls_003"
        >
          <span class="cls_003">
            คณะวิศวกรรมศาสตรศรราชา มหาวิทยาลัยเกษตรศาสตร์
          </span>
        </div>
        <div
          style={{ position: "absolute", left: "357.48px", top: "81.83px" }}
          class="cls_003"
        >
          <span class="cls_003">ชื่อ</span>
          <span class="cls_002">-</span>
          <span class="cls_003">นามสกุล</span>
          {/* <span class="cls_002"> (Name)</span> */}
          {/* <span class="cls_002">{this.state.user}</span> */}
          <span class="cls_002">{this.state.fname}</span>
          <span class="cls_002">{this.state.lname}</span>
        </div>
        <div
          style={{ position: "absolute", left: "111.72px", top: "85.43px" }}
          class="cls_003"
        >
          <span class="cls_003">โทรศัพท์</span>
          <span class="cls_005"> 0-3835-4581</span>
        </div>
        <div
          style={{ position: "absolute", left: "357.48px", top: "100.07px" }}
          class="cls_003"
        >
          <span class="cls_003">เลขที่บัตรประชาชน</span>
          <span class="cls_002"> {this.state.id}</span>
        </div>
        <div
          style={{ position: "absolute", left: "357.48px", top: "118.43px" }}
          class="cls_002"
        >
          <span class="cls_003">Paper ID</span>
          <span class="cls_002">{this.state.paper_id}</span>
        </div>
        <div
          style={{ position: "absolute", left: "111.72px", top: "121.43px" }}
          class="cls_003"
        >
          <span class="cls_003">
            ธนาคารทหารไทย จำกัด (มหาชน) Comp. <b>Code : 2087</b>
          </span>
        </div>
        {/* <div
        style={{ position: "absolute", left: "357.48px", top: "136.55px" }}
        class="cls_003"
      >
        <span class="cls_003">เบอรโทรศัพท์มือถือ</span>
        <span class="cls_002"> (Ref.3)</span>
      </div> */}
        <div
          style={{ position: "absolute", left: "430.80px", top: "180.59px" }}
          class="cls_003"
        >
          <span class="cls_003">จำนวนเงิน (บาท)</span>
        </div>
        <div
          style={{ position: "absolute", left: "96.24px", top: "189.71px" }}
          class="cls_003"
        >
          <span class="cls_003">
            โปรดชำระเงินผ่านเคาน์เตอร์ธนาคารทหารไทยทุกสาขาทั่วประเทศ
          </span>
        </div>
        <div
          style={{ position: "absolute", left: "435.80px", top: "198.83px" }}
          class="cls_002"
        >
          <span class="cls_002">Amount (Baht)</span>
        </div>
        <div
          style={{ position: "absolute", left: "80.08px", top: "217.67px" }}
          class="cls_003"
        >
          <span class="cls_003">เงินสด</span>
        </div>
        <div
          style={{ position: "absolute", left: "80.08px", top: "235.79px" }}
          class="cls_002"
        >
          <span class="cls_002">Cash</span>
        </div>
        <div
          style={{ position: "absolute", left: "120.72px", top: "242.15px" }}
          class="cls_003"
        >
          <span class="cls_002">
            {" "}
            โปรดเขียนจำนวนเงินเป็นตัวหนังสือ / Please write amount in words
          </span>
        </div>

        <div
          style={{ position: "absolute", left: "420.72px", top: "242.15px" }}
          class="cls_003"
        >
          <span class="cls_002">{this.state.af_price}</span>
        </div>

        <div
          style={{ position: "absolute", left: "51.36px", top: "260.87px" }}
          class="cls_003"
        >
          <span class="cls_003">
            หมายเหตุ - ค่าธรรมเนียม 10 บาททั่วประเทศ (
            เรียกเก็บค่าธรรมเนียมกับผู้ชำระเงิน )
          </span>
        </div>
        <div
          style={{ position: "absolute", left: "444.00px", top: "325.55px" }}
          class="cls_003"
        >
          <span class="cls_003">ผู้รับเงิน</span>
          <span class="cls_002"> / Collector</span>
        </div>
        <div
          style={{ position: "absolute", left: "51.36px", top: "343.31px" }}
          class="cls_005"
        >
          <span class="cls_005">( สำหรับผู้ส่งบทความ )</span>
        </div>
        <div
          style={{ position: "absolute", left: "250.44px", top: "396.83px" }}
          class="cls_003"
        >
          <span class="cls_003">สาขาผู้รับฝาก</span>
        </div>
        <div
          style={{ position: "absolute", left: "453.83px", top: "396.83px" }}
          class="cls_003"
        >
          <span class="cls_003">วันที่</span>
        </div>
        <div
          style={{ position: "absolute", left: "399.84px", top: "423.95px" }}
          class="cls_003"
        >
          <span class="cls_003">โปรดระบุรายละเอียด</span>
          <span class="cls_004">ผู้สมัคร</span>
        </div>
        <div
          style={{ position: "absolute", left: "111.72px", top: "430.55px" }}
          class="cls_003"
        >
          <span class="cls_003">
            คณะวิศวกรรมศาสตรศรราชา มหาวิทยาลัยเกษตรศาสตร์
          </span>
        </div>
        <div
          style={{ position: "absolute", left: "357.48px", top: "441.83px" }}
          class="cls_003"
        >
          <span class="cls_003">ชื่อ</span>
          <span class="cls_002">-</span>
          <span class="cls_003">นามสกุล</span>
          {/* <span class="cls_002"> (Name)</span> */}
          <span class="cls_002">{this.state.fname}</span>
          <span class="cls_002">{this.state.lname}</span>
        </div>
        <div
          style={{ position: "absolute", left: "111.72px", top: "446.99px" }}
          class="cls_003"
        >
          <span class="cls_003">โทรศัพท์</span>
          <span class="cls_005"> 0-3835-4581</span>
        </div>
        <div
          style={{ position: "absolute", left: "357.48px", top: "460.07px" }}
          class="cls_003"
        >
          <span class="cls_003">เลขที่บัตรประชาชน</span>
          <span class="cls_002"> {this.state.id}</span>
        </div>
        <div
          style={{ position: "absolute", left: "357.48px", top: "478.43px" }}
          class="cls_002"
        >
          <span class="cls_002">Paper ID</span>
          <span class="cls_002"> {this.state.paper_id}</span>
        </div>
        <div
          style={{ position: "absolute", left: "111.72px", top: "482.99px" }}
          class="cls_003"
        >
          <span class="cls_003">
            ธนาคารทหารไทย จำกัด (มหาชน) Comp. <b>Code : 2087</b>
          </span>
        </div>
        {/* <div
        style={{ position: "absolute", left: "357.48px", top: "496.67px" }}
        class="cls_003"
      >
        <span class="cls_003">เบอร์โทรศัพท์มือถือ</span>
        <span class="cls_002"> (Ref.3)</span>
      </div> */}
        <div
          style={{ position: "absolute", left: "430.80px", top: "542.15px" }}
          class="cls_003"
        >
          <span class="cls_003">จำนวนเงิน (บาท)</span>
        </div>
        <div
          style={{ position: "absolute", left: "96.24px", top: "551.27px" }}
          class="cls_003"
        >
          <span class="cls_003">
            โปรดชำระเงินผ่านเคาน์เตอร์ธนาคารทหารไทยทุกสาขาทั่วประเทศ
          </span>
        </div>

        <div
          style={{ position: "absolute", left: "435.80px", top: "560.39px" }}
          class="cls_002"
        >
          <span class="cls_002">Amount (Baht)</span>
        </div>
        <div
          style={{ position: "absolute", left: "80.08px", top: "579.23px" }}
          class="cls_003"
        >
          <span class="cls_003">เงินสด</span>
        </div>
        <div
          style={{ position: "absolute", left: "80.08px", top: "597.35px" }}
          class="cls_002"
        >
          <span class="cls_002">Cash</span>
        </div>
        <div
          style={{ position: "absolute", left: "120.72px", top: "603.71px" }}
          class="cls_003"
        >
          <span class="cls_002">
            {" "}
            โปรดเขียนจำนวนเงินเป็นตัวหนังสือ / Please write amount in words
          </span>
        </div>

        <div
          style={{ position: "absolute", left: "420.72px", top: "603.71px" }}
          class="cls_003"
        >
          <span class="cls_002">{this.state.af_price}</span>
        </div>

        <div
          style={{ position: "absolute", left: "51.36px", top: "622.43px" }}
          class="cls_003"
        >
          <span class="cls_003">
            หมายเหตุ - ค่าธรรมเนียม 10 บาททั่วประเทศ (
            เรียกเก็บค่าธรรมเนียมกับผู้ชำระเงิน )
          </span>
        </div>
        <div
          style={{ position: "absolute", left: "444.00px", top: "687.11px" }}
          class="cls_003"
        >
          <span class="cls_003">ผู้รับเงิน</span>
          <span class="cls_002"> / Collector</span>
        </div>
        <div
          style={{ position: "absolute", left: "51.36px", top: "704.87px" }}
          class="cls_005"
        >
          <span class="cls_005">( สำหรับเจ้าหน้าที่ธนาคาร )</span>
        </div>
      </div>
    );
  }
}

export default Form;
