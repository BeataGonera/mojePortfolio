import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAErrPv8RkEC40-EZqwpoDafopRUAyYxgY",
  authDomain: "portfolio-ec6b9.firebaseapp.com",
  projectId: "portfolio-ec6b9",
  storageBucket: "portfolio-ec6b9.appspot.com",
  messagingSenderId: "517907895764",
  appId: "1:517907895764:web:f910624585e82b5ca6b241"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
