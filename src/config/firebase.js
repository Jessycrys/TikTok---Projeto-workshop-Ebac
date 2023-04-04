
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyCYPF5JKCctX-vueA4cxNS3qBMLkre5Ygw",
  authDomain: "jornada---tiktok.firebaseapp.com",
  projectId: "jornada---tiktok",
  storageBucket: "jornada---tiktok.appspot.com",
  messagingSenderId: "315755203077",
  appId: "1:315755203077:web:91c7fd4491b30df5d7aa6c"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;