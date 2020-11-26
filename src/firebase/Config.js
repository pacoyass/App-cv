import firebase from 'firebase'
import 'firebase/storage'
import 'firebase/auth'



var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_authDomain,
    databaseURL:process.env.REACT_APP_FIREBASE_databaseURL,
    projectId: process.env.REACT_APP_FIREBASE_projectId,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId,
    appId: process.env.REACT_APP_FIREBASE_appId, 
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  const store = firebase.initializeApp(firebaseConfig);
  const db = store.firestore();
  export { db };
  export const storage = firebase.storage();
  export const app=store.auth()