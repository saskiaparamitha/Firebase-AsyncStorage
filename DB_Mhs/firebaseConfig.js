import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3AtWzt2ax9CfvXdVHiy-8ip4P3aez3os",
  authDomain: "db-mhs-firebase.firebaseapp.com",
  projectId: "db-mhs-firebase",
  storageBucket: "db-mhs-firebase.appspot.com",
  messagingSenderId: "926765211836",
  appId: "1:926765211836:android:d799024f734c06121bb0b9"
};

// init
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
