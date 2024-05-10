// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeUd0J-4I3vs8SIaugPP6CSC8IC42Db_A",
  authDomain: "exame-11.firebaseapp.com",
  projectId: "exame-11",
  storageBucket: "exame-11.appspot.com",
  messagingSenderId: "72747370001",
  appId: "1:72747370001:web:209d7c22856c9df62553b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;