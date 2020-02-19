import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDeGrMAYgcGRNzToLrIcbJ--XzelA9etkY",
  authDomain: "leaf-main-homepage.firebaseapp.com",
  databaseURL: "https://leaf-main-homepage.firebaseio.com",
  projectId: "leaf-main-homepage",
  storageBucket: "leaf-main-homepage.appspot.com",
  messagingSenderId: "153427264116",
  appId: "1:153427264116:web:07ae07439dfd05ac920721",
  measurementId: "G-YKJ4SC5T9J"
};

firebase.initializeApp(config);

const firestore = new firebase.firestore();

export { firestore };
