import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBBY0XhZ92zIZ1rb_MzRSFGL5teGRvulBE",
    authDomain: "proyecto-final-vuejs.firebaseapp.com",
    projectId: "proyecto-final-vuejs",
    storageBucket: "proyecto-final-vuejs.appspot.com",
    messagingSenderId: "589864552527",
    appId: "1:589864552527:web:b26528377ac7da5536023a"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const bandasCollection = collection(db, 'bandas')

export default bandasCollection