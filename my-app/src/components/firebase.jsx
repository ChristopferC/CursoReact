import { initializeApp } from 'firebase/app';
import {getFirestore} from  'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB_0xPh8nYrAWjaXz3wLQQWFjE1F92LiAM",
    authDomain: "santisublime-tienda.firebaseapp.com",
    projectId: "santisublime-tienda",
    storageBucket: "santisublime-tienda.appspot.com",
    messagingSenderId: "62815136712",
    appId: "1:62815136712:web:38176760b879af6d51aefd",
    measurementId: "G-BHSJ9BYKLK"
  };

  const app = initializeApp (firebaseConfig)
  export const db = getFirestore(app)