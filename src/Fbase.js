import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAu-JZUATnhcEdLn4MldrXMkfKHlXC_iZE",
    authDomain: "ugbd-f2a5b.firebaseapp.com",
    projectId: "ugbd-f2a5b",
    storageBucket: "ugbd-f2a5b.appspot.com",
    messagingSenderId: "552713815669",
    appId: "1:552713815669:web:d117ff3dc1052eccc8da3c"
};

firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();

export const dbService = firebase.firestore();

export const firebaseInstance = firebase;

export const chatDb = firebase.database();