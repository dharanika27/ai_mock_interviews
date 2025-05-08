import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth }from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD7P06CUpCJoiykTeOIvV5VC277wVL5-2w",
    authDomain: "prepwise-67377.firebaseapp.com",
    projectId: "prepwise-67377",
    storageBucket: "prepwise-67377.firebasestorage.app",
    messagingSenderId: "46221967429",
    appId: "1:46221967429:web:933c21d0ae0662a38c232c",
    measurementId: "G-P034046L0J"
}; 

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
