import firebase from 'firebase';
require('@firebase/firestore')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDWOQSuDEOAS-_5RtgSDQ86MYKy2Y8zIAQ",
    authDomain: "cleaningtips-c2476.firebaseapp.com",
    projectId: "cleaningtips-c2476",
    storageBucket: "cleaningtips-c2476.appspot.com",
    messagingSenderId: "873238894169",
    appId: "1:873238894169:web:9f773e91441182ebbdc348",
    measurementId: "G-9ZBBZ5CDG1"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();