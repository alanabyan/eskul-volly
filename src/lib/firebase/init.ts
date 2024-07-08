// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWjM94hx-mMRS_tw04JjcdOoiFfOLB754",
  authDomain: "app-nextjs-c0cfc.firebaseapp.com",
  projectId: "app-nextjs-c0cfc",
  storageBucket: "app-nextjs-c0cfc.appspot.com",
  messagingSenderId: "865040123757",
  appId: "1:865040123757:web:5c96dbffbf5d1dbbf47c64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;