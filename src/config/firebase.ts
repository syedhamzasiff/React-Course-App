// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSM9wkYV0_5cz6Qdvqr0fe2Z6eb2Jxv80",
  authDomain: "pedrotech-react-proj.firebaseapp.com",
  projectId: "pedrotech-react-proj",
  storageBucket: "pedrotech-react-proj.appspot.com",
  messagingSenderId: "284111565457",
  appId: "1:284111565457:web:467621602206a647720530"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);