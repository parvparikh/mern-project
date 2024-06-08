// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-project-65312.firebaseapp.com",
  projectId: "mern-project-65312",
  storageBucket: "mern-project-65312.appspot.com",
  messagingSenderId: "741770599912",
  appId: "1:741770599912:web:414486226620fce64bd85d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

