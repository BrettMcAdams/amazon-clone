import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyD3RPgTndWmRRzIglDOz-Ey37sPJcSazsw",
  authDomain: "ecommerce-clone-ee31c.firebaseapp.com",
  databaseURL: "https://ecommerce-clone-ee31c.firebaseio.com",
  projectId: "ecommerce-clone-ee31c",
  storageBucket: "ecommerce-clone-ee31c.appspot.com",
  messagingSenderId: "970118494918",
  appId: "1:970118494918:web:75db8d1a4e1ac486ba75c7",
  measurementId: "G-Z969G62L21",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };