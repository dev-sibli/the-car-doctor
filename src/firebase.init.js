// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCoP6kLvahyW2-P7q0pzS0fGe7Bb21-kjQ",
    authDomain: "genius-car-service-e2d2d.firebaseapp.com",
    projectId: "genius-car-service-e2d2d",
    storageBucket: "genius-car-service-e2d2d.appspot.com",
    messagingSenderId: "765401748414",
    appId: "1:765401748414:web:384eaa4b908b0dfe879fef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;