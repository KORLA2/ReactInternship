// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK3b64Dtqi6xupnNShevZJk6iZBT2eVoQ",
  authDomain: "news-b26d3.firebaseapp.com",
  projectId: "news-b26d3",
  storageBucket: "news-b26d3.appspot.com",
  messagingSenderId: "411621615108",
  appId: "1:411621615108:web:28fff8a102e79bbd3fb751",
};

// Initialize Firebase
const app =initializeApp(firebaseConfig);
export let auth=getAuth(app)
export default app;