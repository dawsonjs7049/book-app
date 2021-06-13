import firebase from "firebase";
const FIREBASE_CONFIG = {
    apiKey: "AIzaSyDveAbkn--ir__h5mDdDIj9OWS2Akw04zk",
    authDomain: "books-app-449ec.firebaseapp.com",
    projectId: "books-app-449ec",
    storageBucket: "books-app-449ec.appspot.com",
    messagingSenderId: "448065705970",
    appId: "1:448065705970:web:9081cc7b16d54dc340bd6b"
  };

  export default function firebaseClient() {
    if(!firebase.apps.length) {
        firebase.initializeApp(FIREBASE_CONFIG);
    }
  }