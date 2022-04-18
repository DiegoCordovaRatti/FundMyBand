import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBBY0XhZ92zIZ1rb_MzRSFGL5teGRvulBE",
    authDomain: "proyecto-final-vuejs.firebaseapp.com",
    projectId: "proyecto-final-vuejs",
    storageBucket: "proyecto-final-vuejs.appspot.com",
    messagingSenderId: "589864552527",
    appId: "1:589864552527:web:b26528377ac7da5536023a"
  };
    
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth