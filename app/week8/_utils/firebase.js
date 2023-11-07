// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf0Rpq64GKVm_ZnlDTocVaEP6g-pp8bmY",
  authDomain: "cprg306-assignments-tylerle.firebaseapp.com",
  projectId: "cprg306-assignments-tylerle",
  storageBucket: "cprg306-assignments-tylerle.appspot.com",
  messagingSenderId: "419972447891",
  appId: "1:419972447891:web:cf694116bc9596c4de1766"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
