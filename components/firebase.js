import * as firebase from "firebase";
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuw4vnGYXt9el8VEchaS_z3nxC81z3ZV4",
  authDomain: "cric-b0640.firebaseapp.com",
  projectId: "cric-b0640",
  storageBucket: "cric-b0640.appspot.com",
  messagingSenderId: "959795396143",
  appId: "1:959795396143:web:1b47d07bd02f2c5df650da",
  measurementId: "G-ENBYDSSBL4"
};

// Initialize Firebase
let app;
if (firebase.apps.length===0) {
  app=firebase.initializeApp(firebaseConfig);

} else {
  app=firebase.app()
}
const analytics = getAnalytics(app);

const auth = firebase.auth()

export { auth };