// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider  } from "firebase/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi29QsNEu8zusKsF0s_uuwib5FlD17sAs",
  authDomain: "rj-coderhouse.firebaseapp.com",
  projectId: "rj-coderhouse",
  storageBucket: "rj-coderhouse.appspot.com",
  messagingSenderId: "751847714692",
  appId: "1:751847714692:web:cbcdeae87074f069b3f7d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();


