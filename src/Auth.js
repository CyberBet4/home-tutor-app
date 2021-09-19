// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8hFd9rQpyKzlGh0eJRgCh6xkjJ2FkkBo",
  authDomain: "home-tutor-app-3ccfb.firebaseapp.com",
  projectId: "home-tutor-app-3ccfb",
  storageBucket: "home-tutor-app-3ccfb.appspot.com",
  messagingSenderId: "904635605737",
  appId: "1:904635605737:web:1b5672511c55784a764678",
  measurementId: "G-Y4TVDTXMTT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);