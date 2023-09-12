import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD3ySG8RyS6wix-O8noYsK9tPa1W2sPo3o",
  authDomain: "codai-development.firebaseapp.com",
  projectId: "codai-development",
  storageBucket: "codai-development.appspot.com",
  messagingSenderId: "190262650042",
  appId: "1:190262650042:web:d7b2c3fafbf815faf50e83",
  measurementId: "G-M115V5N9DS"
};

let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;