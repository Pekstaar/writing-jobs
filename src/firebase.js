import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC1IeZaFGYcJU2vDBOURpG-yY6CHC9UPrc",
  authDomain: "local-writing-test.firebaseapp.com",
  projectId: "local-writing-test",
  storageBucket: "local-writing-test.appspot.com",
  messagingSenderId: "200579644419",
  appId: "1:200579644419:web:d1b3dd717b46b98a886236",
};

const app = firebase.initializeApp(config);

export const auth = app.auth();

export default app;
