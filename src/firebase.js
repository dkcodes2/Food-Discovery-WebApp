import { initializeApp } from 'firebase/app'
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOK75O6JGOgR9UFbglIR0IArQqba0VOrQ",
  authDomain: "drigmo2-8f507.firebaseapp.com",
  projectId: "drigmo2-8f507",
  storageBucket: "drigmo2-8f507.appspot.com",
  messagingSenderId: "56142698014",
  appId: "1:56142698014:web:57e408a5a61e960037c00f",
};


const drigmo2 = initializeApp(firebaseConfig);

const storage = getStorage(drigmo2);  

export default drigmo2;
export {storage}

