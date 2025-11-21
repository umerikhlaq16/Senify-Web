// ================= FIREBASE IMPORTS =================
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider 
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// IMPORTANT: Analytics only works in browser HTTPS — so safely wrap.
import { getAnalytics, isSupported } from "firebase/analytics";

// Storage (this was missing in your file!)
import { getStorage } from "firebase/storage";


// ================= FIREBASE CONFIG =================
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};


// ================= INITIALIZE APP =================
const app = initializeApp(firebaseConfig);


// ================= ANALYTICS SAFE INIT =================
isSupported().then((yes) => {
  if (yes) getAnalytics(app);
});


// ================= EXPORT AUTH =================
export const auth = getAuth(app);


// ================= EXPORT FIRESTORE =================
export const db = getFirestore(app);


// ================= EXPORT STORAGE (required) =================
export const storage = getStorage(app);


// ================= GOOGLE PROVIDER =================
export const googleProvider = new GoogleAuthProvider();
// Force account selection
googleProvider.setCustomParameters({ prompt: "select_account" });


// ================= DEFAULT APP EXPORT =================
export default app;

