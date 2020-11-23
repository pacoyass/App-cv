import firebase from 'firebase'
import 'firebase/storage'
import 'firebase/auth'



var firebaseConfig = {
    apiKey: "AIzaSyCb6TNFYoDB8TAHtC9nMX6syjG7mTNSI4k",
    authDomain: "app-cv-9a93d.firebaseapp.com",
    databaseURL: "https://app-cv-9a93d.firebaseio.com",
    projectId: "app-cv-9a93d",
    storageBucket: "app-cv-9a93d.appspot.com",
    messagingSenderId: "193963867896",
    appId: "1:193963867896:web:980fc2f2c9c63c4852450d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  const store = firebase.initializeApp(firebaseConfig);
  const db = store.firestore();
  export { db };
  export const storage = firebase.storage();
  export const app=store.auth()