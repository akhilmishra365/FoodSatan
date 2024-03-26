// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "foodsatan360.firebaseapp.com",
  projectId: "foodsatan360",
  storageBucket: "foodsatan360.appspot.com",
  messagingSenderId: "1000887800274",
  appId: "1:1000887800274:web:53715c9c79a62b68a6780b",
  measurementId: "G-1QLGJBM5HK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

