import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "vinflat.firebaseapp.com",
  projectId: "vinflat",
  storageBucket: "vinflat.appspot.com",
  messagingSenderId: "477007183791",
  appId: "1:477007183791:web:dc929c79a41ea2789a795a",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
