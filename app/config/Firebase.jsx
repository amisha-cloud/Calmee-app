// config/Firebase.js (place it outside the `app/` folder)
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// ✅ Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS5lXBHD5zvpwxaeP7dRztvk1gSr2zx38",
  authDomain: "calmee-7be53.firebaseapp.com",
  projectId: "calmee-7be53",
  storageBucket: "calmee-7be53.appspot.com", // fixed domain typo
  messagingSenderId: "470793122268",
  appId: "1:470793122268:web:aa8480367ac74a77cf5f19",
  measurementId: "G-BE5BZNCR7L"
};

// ✅ Initialize Firebase App
const app = initializeApp(firebaseConfig);

// ✅ Setup Auth with persistence
const auth = getAuth(app);

// ✅ Google Auth Provider
const googleAuthProvider = new GoogleAuthProvider();

// ✅ Firestore instance
const db = getFirestore(app);

export { app, auth, db, googleAuthProvider };

