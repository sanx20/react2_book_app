import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCeAHCnw004QJGKf6V606-iA9fqqJFMYyA",
    authDomain: "react-book-app-44a56.firebaseapp.com",
    projectId: "react-book-app-44a56",
    storageBucket: "react-book-app-44a56.firebasestorage.app",
    messagingSenderId: "290349058571",
    appId: "1:290349058571:web:e05a131b156aaf6c42950e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);