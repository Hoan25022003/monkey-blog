import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9sj9msqxaTT26to9Aj50DMANB523yLPU",
  authDomain: "monkey-blog-8d61f.firebaseapp.com",
  projectId: "monkey-blog-8d61f",
  storageBucket: "monkey-blog-8d61f.appspot.com",
  messagingSenderId: "512968481226",
  appId: "1:512968481226:web:40b4b39387179221841733",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
