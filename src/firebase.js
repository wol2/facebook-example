/* eslint-disable no-unused-vars */
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB8OMcU4M8xJ3BI8wcSMJbEGmvNck-Vlak",
  authDomain: "fb-clone-2d1c0.firebaseapp.com",
  databaseURL: "https://fb-clone-2d1c0.firebaseio.com",
  projectId: "fb-clone-2d1c0",
  storageBucket: "fb-clone-2d1c0.appspot.com",
  messagingSenderId: "465555715568",
  appId: "1:465555715568:web:8301c42e5ae7ddb4775935",
  measurementId: "G-E47RF5YS6N",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
