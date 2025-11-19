import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// TODO: Replace with your actual Firebase config from Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyD4ptdW6ufpe4vWbTzYM5ViWy5WyooKJj0",
    authDomain: "my-wedding-77581.firebaseapp.com",
    projectId: "my-wedding-77581",
    storageBucket: "my-wedding-77581.firebasestorage.app",
    messagingSenderId: "418143314196",
    appId: "1:418143314196:web:3c331b9aeab0ec67906201"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
