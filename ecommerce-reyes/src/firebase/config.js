import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBMbPUA9Rm1_5exsb_0ToGCIYjxKsSBf4k",
  authDomain: "ecommerce-reyes.firebaseapp.com",
  projectId: "ecommerce-reyes",
  storageBucket: "ecommerce-reyes.appspot.com",
  messagingSenderId: "1076126655681",
  appId: "1:1076126655681:web:ef431f0c34654a2771a040"
};

const app = initializeApp(firebaseConfig);

export const initFirebase = () =>  app