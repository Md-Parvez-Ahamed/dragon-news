// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYz9-qcC_pqVzGtXN4rVdrsS-Cti_-qZA",
  authDomain: "dragon-news-project-auth-bfd70.firebaseapp.com",
  projectId: "dragon-news-project-auth-bfd70",
  storageBucket: "dragon-news-project-auth-bfd70.appspot.com",
  messagingSenderId: "368149655772",
  appId: "1:368149655772:web:60b65c9842feea8c6b4419"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app