import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAI1VtMFmT7vOa6uiZl45HqmRe0NwrixCk",
  authDomain: "fasttravel-22a28.firebaseapp.com",
  projectId: "fasttravel-22a28",
  storageBucket: "fasttravel-22a28.appspot.com",
  messagingSenderId: "147710753653",
  appId: "1:147710753653:web:9c6446c102d517bf23f13c",
  measurementId: "G-EFJTY6FMFW",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);