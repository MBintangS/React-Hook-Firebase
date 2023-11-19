// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxyulPr_3_y2OVNyfDN_88W_Yqx5Gq05c",
  authDomain: "auth-lat-react.firebaseapp.com",
  projectId: "auth-lat-react",
  storageBucket: "auth-lat-react.appspot.com",
  messagingSenderId: "971975454240",
  appId: "1:971975454240:web:24a4e031e6b40cacc5d645"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);