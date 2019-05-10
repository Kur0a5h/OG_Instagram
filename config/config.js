import firebase from 'firebase';

//API details

const config = {
    apiKey: "AIzaSyB3aLunXLDkyBbryWyyAEGPpjyzntZZvXk",
    authDomain: "og-instagram.firebaseapp.com",
    databaseURL: "https://og-instagram.firebaseio.com",
    projectId: "og-instagram",
    storageBucket: "og-instagram.appspot.com",
    messagingSenderId: "430991486092",
    appId: "1:430991486092:web:3cd6337aefb85ffc"
  };

firebase.initializeApp(config)

export const f = firebase;
export const db = firebase.database();
export const auth = firebase.auth();
export const stoarage = firebase.storage();