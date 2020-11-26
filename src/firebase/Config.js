import firebase from 'firebase'
import 'firebase/storage'
import 'firebase/auth'



var config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_authDomain,
    databaseURL:process.env.REACT_APP_databaseURL,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId, 
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  

  const store = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
  const db = store.firestore();
  export { db };
  export const storage = firebase.storage();
  export const app=store.auth()