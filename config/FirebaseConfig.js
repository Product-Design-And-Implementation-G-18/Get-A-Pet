// Import Firebase core and necessary services
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6pR-MWDclPXKZ7CVGW9QN6IBWnYGIRG0",
  authDomain: "adoptme-b0c1f.firebaseapp.com",
  projectId: "adoptme-b0c1f",
  storageBucket: "adoptme-b0c1f.firebasestorage.app",
  messagingSenderId: "231648151048",
  appId: "1:231648151048:web:499a931d9e7a394273f3bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
