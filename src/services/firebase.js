import firebase from "firebase";
// const firebaseConfig = {
//   apiKey: "AIzaSyDhfmodZEz_HNsUH7P88f4EGh5rPvoxY90",
//   authDomain: "my-project-2fb8a.firebaseapp.com",
//   databaseURL: "https://my-project-2fb8a.firebaseio.com",
//   projectId: "my-project-2fb8a",
//   storageBucket: "my-project-2fb8a.appspot.com",
//   messagingSenderId: "52088696948",
//   appId: "1:52088696948:web:87e92c945a459446d8e121",
//   measurementId: "G-VR5Y4G8C40"
// };
const config = {
  apiKey: "AIzaSyDckgWOsIXhWuKP3ywqHKpCSPZj9PtVu_s",
  authDomain: "loginse-5c3bd.firebaseapp.com",
  databaseURL: "https://loginse-5c3bd.firebaseio.com",
  projectId: "loginse-5c3bd",
  storageBucket: "loginse-5c3bd.appspot.com",
  messagingSenderId: "862840352206",
  appId: "1:862840352206:web:11e045dfafbf599bb3cf9f",
  measurementId: "G-X9HR5E03ZZ"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
