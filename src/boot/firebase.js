// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDv7oFVfY1xPb7AcomKLUkrkBHaeHygePw",
  authDomain: "fridge-monitor-6d629.firebaseapp.com",
  projectId: "fridge-monitor-6d629",
  storageBucket: "fridge-monitor-6d629.firebasestorage.app",
  messagingSenderId: "19772705942",
  appId: "1:19772705942:web:fef88be963455d817906b7",
  measurementId: "G-2B0XCDPWP5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, analytics };
