import firebase from "firebase";
const config = {
  apiKey: "AIzaSyDckgWOsIXhWuKP3ywqHKpCSPZj9PtVu_s",
  authDomain: "loginse-5c3bd.firebaseapp.com",
  databaseURL: "https://loginse-5c3bd.firebaseio.com"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
