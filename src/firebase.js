import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCU5w636QbTrYjxlU9n9O8vO4gbcHb6O-s",
  authDomain: "clone-31f15.firebaseapp.com",
  databaseURL: "https://clone-31f15.firebaseio.com",
  projectId: "clone-31f15",
  storageBucket: "clone-31f15.appspot.com",
  messagingSenderId: "200384967395",
  appId: "1:200384967395:web:786f545087fb1c6ec80bd6",
  measurementId: "G-VETCQHK8Z9"
});

const auth = firebase.auth();

export {auth};