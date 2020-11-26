import firebase from 'firebase'
import 'firebase/storage'
import 'firebase/auth'


var config = {
  apiKey: "AIzaSyBDKiNfeunrQlCH8XHc4YUgiB8rAmNzz60",
    authDomain: "comptencemanager.firebaseapp.com",
    databaseURL: "https://comptencemanager.firebaseio.com",
    projectId: "comptencemanager",
    storageBucket: "comptencemanager.appspot.com",
    messagingSenderId: "393322206886",
    appId: "1:393322206886:web:9ee2eb532dbb3e307d8667"
};
// Initialize Firebase
const store = firebase.initializeApp(config);
  
// const store = !firebase.apps.length ? firebase.initializeApp(config) :
//  firebase.app();
  export const db = store.firestore();
  export const storage = firebase.storage();
  export const app=store.auth()
