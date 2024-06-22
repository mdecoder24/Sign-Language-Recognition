import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDivt2cCl1jXDrBkuy2AM30_aF-D0RFTeQ",
  authDomain: "slr1-60c23.firebaseapp.com",
  projectId: "slr1-60c23",
  storageBucket: "slr1-60c23.appspot.com",
  messagingSenderId: "1058633383862",
  appId: "1:1058633383862:web:47414870e9b686c0f58b17",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { firebase, auth, db};

