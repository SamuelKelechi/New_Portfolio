import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfiyvVNu8lq3xJy5r-KkQftIHtRU5WIfc",
  authDomain: "dev-samuel-kelechi.firebaseapp.com",
  projectId: "dev-samuel-kelechi",
  storageBucket: "dev-samuel-kelechi.appspot.com",
  messagingSenderId: "905105243951",
  appId: "1:905105243951:web:4449da605de3929cdcebda"
  };
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);