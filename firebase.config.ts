import firebase from "firebase/";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAQD2Qn2Ssibr28RvfaLIM31-i4LQMDZrs",
  authDomain: "facebook-v2-480ba.firebaseapp.com",
  projectId: "facebook-v2-480ba",
  storageBucket: "facebook-v2-480ba.appspot.com",
  messagingSenderId: "1017784524199",
  appId: "1:1017784524199:web:4f439e675ea1ff63be2a82",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
