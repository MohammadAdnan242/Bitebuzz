// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKx8k-kxiUtELovXjdhN98Z64YQzp0bxM",
  authDomain: "foodapp-2e435.firebaseapp.com",
  projectId: "foodapp-2e435",
  storageBucket: "foodapp-2e435.firebasestorage.app",
  messagingSenderId: "32921630241",
  appId: "1:32921630241:web:53a18bf7988594386c9560",
  measurementId: "G-0DS27B7X0R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth()
export const db = getFirestore(app)
export default app
