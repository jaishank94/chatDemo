import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB4V0SiSRbwvMVjnZLnQuS6PX1mPHFmRIU",
    authDomain: "kure-dev-191711.firebaseapp.com",
    databaseURL: "https://kure-dev-191711.firebaseio.com",
    projectId: "kure-dev-191711",
    storageBucket: "kure-dev-191711.appspot.com",
    messagingSenderId: "880900664877",
    appId: "1:880900664877:web:e792da0bb55f78ed0152a4"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;