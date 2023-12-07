// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore/lite";


const firebaseConfig = {
  apiKey: "AIzaSyDswTe4cZ-NHIrwWwk3GJq7L9r_yOH-H6s",
  authDomain: "proyecto-final-e-ecomerce.firebaseapp.com",
  projectId: "proyecto-final-e-ecomerce",
  storageBucket: "proyecto-final-e-ecomerce.appspot.com",
  messagingSenderId: "170773573122",
  appId: "1:170773573122:web:7f1fef0a468f3dc45ec11b"
};


export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB   = getFirestore(FirebaseApp);