// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//importar credenciales
import * as credenciales from "../secrets/credenciales";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: credenciales.apiKey,
  authDomain: credenciales.authDomain,
  databaseURL: credenciales.databaseURL,
  projectId: credenciales.projectId,
  storageBucket: credenciales.storageBucket,
  messagingSenderId: credenciales.messagingSenderId,
  appId: credenciales.appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
