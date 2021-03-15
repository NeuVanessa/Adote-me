import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyBxH0r4pgih83yRD35Mh_h2pvp67ihE-lA",
  authDomain: "adote-me-50b91.firebaseapp.com",
  projectId: "adote-me-50b91",
  storageBucket: "adote-me-50b91.appspot.com",
  messagingSenderId: "816356363646",
  appId: "1:816356363646:web:a2d151b347baaee7c2772f",
  measurementId: "G-J77QKHD6T5"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
