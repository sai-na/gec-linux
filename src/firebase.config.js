// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzuPqYqlgHeGUjZiQAt7ZtCwa7XpszLfw",
    authDomain: "linux-gec.firebaseapp.com",
    projectId: "linux-gec",
    storageBucket: "linux-gec.appspot.com",
    messagingSenderId: "1055827097891",
    appId: "1:1055827097891:web:39e67c8a31ee48de1d7496"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default app