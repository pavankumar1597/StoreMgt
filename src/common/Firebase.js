// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN2pk1Jm7nbCEXWrOSlfIAaZleLeBfCng",
  authDomain: "jmsadmin-619b1.firebaseapp.com",
  projectId: "jmsadmin-619b1",
  storageBucket: "jmsadmin-619b1.appspot.com",
  messagingSenderId: "620735002124",
  appId: "1:620735002124:web:a83c02a28e83fb0b11a029"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
