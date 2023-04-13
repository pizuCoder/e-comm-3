// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYk7PElj1CJoVcy3vpU9EKE3H8avKOleo",
  authDomain: "sharpener-ecom.firebaseapp.com",
  projectId: "sharpener-ecom",
  storageBucket: "sharpener-ecom.appspot.com",
  messagingSenderId: "902435325825",
  appId: "1:902435325825:web:3815e9a4b8fb86b1be0a80",
  measurementId: "G-4G100FMSCY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)