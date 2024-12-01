// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import   { getAnalytics } from "firebase/android"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "adoptme-b0c1f.firebaseapp.com",
  projectId: "adoptme-b0c1f",
  storageBucket: "adoptme-b0c1f.firebasestorage.app",
  messagingSenderId: "231648151048",
  appId: "1:231648151048:web:499a931d9e7a394273f3bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app,);
export const storage = getStorage(app);