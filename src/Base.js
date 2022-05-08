import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBjcljKrIaxTY2vsLE4OpJIK3yHvSPeHqs",
  authDomain: "lsetf-database.firebaseapp.com",
  projectId: "lsetf-database",
  storageBucket: "lsetf-database.appspot.com",
  messagingSenderId: "688517096125",
  appId: "1:688517096125:web:7c72380e77f55309c74dd4"
  };
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);