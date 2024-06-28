// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTbPoKMb8A1VPbYi-2EJaaIH25RIgHPT0",
  authDomain: "auth-test-2305e.firebaseapp.com",
  projectId: "auth-test-2305e",
  storageBucket: "auth-test-2305e.appspot.com",
  messagingSenderId: "622692390317",
  appId: "1:622692390317:web:fea8a0aa45291370e2bd24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export { auth }