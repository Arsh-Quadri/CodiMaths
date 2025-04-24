import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBC2iyLzfCA-6eCkgT9pMFnsDTVAb5B4pg",
  authDomain: "practice-7f555.firebaseapp.com",
  databaseURL: "https://practice-7f555-default-rtdb.firebaseio.com",
  projectId: "practice-7f555",
  storageBucket: "practice-7f555.firebasestorage.app",
  messagingSenderId: "980472808112",
  appId: "1:980472808112:web:a9d085e3c0a936b731b175",
  measurementId: "G-H6SVD5RF0D",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
