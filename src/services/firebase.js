import firebase from "firebase";
const config = {
  apiKey: "AIzaSyDckgWOsIXhWuKP3ywqHKpCSPZj9PtVu_s",
  authDomain: "loginse-5c3bd.firebaseapp.com",
  databaseURL: "https://loginse-5c3bd.firebaseio.com"
};

firebase.initializeApp(config);
export default firebase;
export const auth = firebase.auth;
export const db = firebase.database();


export const checkAdmin =async ()=>{
  try {
    var Uid;
    db.ref('Admin/').on("value",snapshot => {
        snapshot.forEach((snap)=>{
          console.log(snap.key)
          Uid=snap.key;
        
        })
     
        
        // console.log(snapshot.val())
        // {console.log(snap.key)}\
        return;
      
      // console.log(Resercherlist);
    })
 

  } catch (error) {
      console.log(error)
  }
} 