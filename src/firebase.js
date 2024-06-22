import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCPze_Kceo7edlzREDHxH8D4RzdwBjzhjQ",
  authDomain: "sign-language-recognitio-a7e2a.firebaseapp.com",
  projectId: "sign-language-recognitio-a7e2a",
  storageBucket: "sign-language-recognitio-a7e2a.appspot.com",
  messagingSenderId: "651463104491",
  appId: "1:651463104491:web:cfca9581e40a7fcdd22bae",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { firebase, auth, db};

