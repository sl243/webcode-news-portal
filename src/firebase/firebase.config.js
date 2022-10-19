// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqVCufuw8p8otXO9edRs2K41FfUjCzXXc",
  authDomain: "webcode-news.firebaseapp.com",
  projectId: "webcode-news",
  storageBucket: "webcode-news.appspot.com",
  messagingSenderId: "443960475811",
  appId: "1:443960475811:web:c823f5c6ad88ea0a417f16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;