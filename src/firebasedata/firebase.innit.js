// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBI6tsJ8R548F2G63wwk4U4f1ZJjNmB3f0",
  authDomain: "bci-blood-donation.firebaseapp.com",
  projectId: "bci-blood-donation",
  storageBucket: "bci-blood-donation.appspot.com",
  messagingSenderId: "617921510914",
  appId: "1:617921510914:web:80b31fea794d52b458711b",
  measurementId: "G-YHYGPZ2EB8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default analytics;