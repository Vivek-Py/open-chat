import firebase from "firebase";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCm7InVBg7Uil6PhB0IJEGA9McKU58XzQk",
  authDomain: "openchat-d1a71.firebaseapp.com",
  projectId: "openchat-d1a71",
  storageBucket: "openchat-d1a71.appspot.com",
  messagingSenderId: "561334743073",
  appId: "1:561334743073:web:ed31ee6dbd16ababe8b360",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const ds = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { fire, db, ds, timestamp };
