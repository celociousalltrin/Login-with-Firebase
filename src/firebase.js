import {initializeApp} from "firebase/app";
import {getAuth}from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAC0j7tbIH699BL9C2hW7Mdi5-FNidRGVY",
    authDomain: "login-fbb41.firebaseapp.com",
    projectId: "login-fbb41",
    storageBucket: "login-fbb41.appspot.com",
    messagingSenderId: "282337175955",
    appId: "1:282337175955:web:72d39d0d15bb35643a6066",
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const db = getFirestore()

  export{app,auth,db};