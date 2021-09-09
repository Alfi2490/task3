import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyB6ONEn5lWxjf17odldQGuaDPprgAeKOIs",
  authDomain: "test3-d2998.firebaseapp.com",
  projectId: "test3-d2998",
  storageBucket: "test3-d2998.appspot.com",
  messagingSenderId: "588405404107",
  appId: "1:588405404107:web:a82c5a9dbf778eef97464e",
  measurementId: "G-BQR0T8QKM3"
};

const fb = initializeApp(firebaseConfig);

const db = getFirestore(fb);

export default db;