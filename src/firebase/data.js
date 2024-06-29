// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAV-4vLiQ_z14bgX2Ku3vDxQ_D8fF2kYYw",
    authDomain: "pedacitosdemundo-bca27.firebaseapp.com",
    projectId: "pedacitosdemundo-bca27",
    storageBucket: "pedacitosdemundo-bca27.appspot.com",
    messagingSenderId: "574859057234",
    appId: "1:574859057234:web:9243fccb8c6b2b5d42678b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
