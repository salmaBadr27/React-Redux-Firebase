import * as firebase from "firebase";
import ReduxSagaFirebase from 'redux-saga-firebase'

var config = {
  apiKey: "AIzaSyCuIHqcaB827y9EWvBajmxLO6p4Ky4egKw",
  authDomain: "myproject-878c0.firebaseapp.com",
  databaseURL: "https://myproject-878c0.firebaseio.com",
  projectId: "myproject-878c0",
  storageBucket: "myproject-878c0.appspot.com",
  messagingSenderId: "90138088952"
};
const myFirebaseApp = firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const reduxSagaFirebase = new ReduxSagaFirebase(myFirebaseApp)
export const usersRef = databaseRef.child("users");
