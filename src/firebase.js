import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB2MQ4f0bO6HoUAjrf0evLZ45yqCbBJREU",
    authDomain: "discordclone-d8f0f.firebaseapp.com",
    projectId: "discordclone-d8f0f",
    storageBucket: "discordclone-d8f0f.appspot.com",
    messagingSenderId: "205180353959",
    appId: "1:205180353959:web:7f0b1475d0aa7835d44a82",
    measurementId: "G-6WR2FT2308"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth