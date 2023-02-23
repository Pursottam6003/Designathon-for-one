// Import the functions you need from the SDKs you need
import devConfig from './devConfig'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = devConfig || {
  apiKey: "AIzaSyDPYJNRPPshCclnmM6gN9IphEeSaLWEgHU",
  authDomain: "designothon-bc5ca.firebaseapp.com",
  projectId: "designothon-bc5ca",
  storageBucket: "designothon-bc5ca.appspot.com",
  messagingSenderId: "463957909104",
  appId: "1:463957909104:web:4f8f406734eb0bc43edeb5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// variables that it will reaturn after calling import
const auth = firebase.auth()
const fs = firebase.firestore();
const storage= firebase.storage();


// redoing from docs
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const reauth = getAuth(app);

export {
  auth,fs,storage,
  app, db, reauth
}