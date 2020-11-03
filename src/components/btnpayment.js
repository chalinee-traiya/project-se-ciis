import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import axios from "axios";
import firebase from "firebase";

export default class btnpayment extends React.Component {
  useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

  /////////upfile//////////////////////////
  state = {
    // Initially, no file is selected

    img: "",
  };

  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };
  onFileUpload = () => {
    var user = firebase.auth().currentUser;
    console.log(user.uid);
    if (user != null) {
      var storageRef = firebase.storage().ref("Slip");
      // Get the file from DOM
      var file = document.getElementById("files").files[0];
      console.log(file);
      //dynamically set reference to the file name
      var thisRef = storageRef.child(file.name);
      this.setState({
        img: file.name,
      });
      //put request upload file to firebase storage
      thisRef.put(file).then((snapshot) => {
        alert("เพิมสลิปสำเร็จ");
        console.log("เพิมสลิปสำเร็จ");
      });

      const storage = firebase.storage();
      storage
        .ref("Slip")
        .child(file.name)
        .getDownloadURL()
        .then((url) => {
          console.log(url);
          this.setState({
            img: url,
          });
        })
        .then(() => {
          // Write the new post's data simultaneously in the posts list and the user's post list.
          var updates = {};
          updates["/User/" + user.uid + "/paid/" + '/img/'] = this.state.img;
          updates["/User/" + user.uid + "/paid/" + '/status/'] = 1;
          firebase.database().ref().update(updates);
          window.location.href = "/status";
        });
    } else {
      window.location.href = "/sign-in";
    }
  };

  render() {
    return (
      <div>
        {/* <input type="file" onChange={this.onFileChange} /> */}
        <input type="file" id="files" name="files[]" multiple />

        <Button
          onClick={this.onFileUpload}
          variant="contained"
          color="default"
          className={this.useStyles.button}
          startIcon={<CloudUploadIcon />}
        >
          Upload Slip
        </Button>
      </div>
    );
  }
}
