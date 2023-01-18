// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFunctions } from "firebase/functions";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdZkWVqu1LUreArgTnE8vKjow3NhYmfbs",
  authDomain: "v-codes.firebaseapp.com",
  projectId: "v-codes",
  storageBucket: "v-codes.appspot.com",
  messagingSenderId: "313169103194",
  appId: "1:313169103194:web:5220c857edaf2fbfd3cb63"
};

// Initialize Firebase
if (!getApps.length) {
  initializeApp(firebaseConfig);
}
export const functions = getFunctions(getApp());