import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMaRoZBsajKhPh1jH996_VQet7pm9szwg",
  authDomain: "clone-3f9c4.firebaseapp.com",
  projectId: "clone-3f9c4",
  storageBucket: "clone-3f9c4.firebasestorage.app",
  messagingSenderId: "289282326457",
  appId: "1:289282326457:web:e285d13b33f2456dd70068",
  measurementId: "G-9X49J813ZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();


