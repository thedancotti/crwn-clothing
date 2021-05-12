import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAAUvHaBMq9Gwa2IjGWdDUlsNohCA-k5zY",
    authDomain: "crwn-db-e2b4b.firebaseapp.com",
    projectId: "crwn-db-e2b4b",
    storageBucket: "crwn-db-e2b4b.appspot.com",
    messagingSenderId: "12589634474",
    appId: "1:12589634474:web:0ab94cb8078a545ee0d1d3",
    measurementId: "G-F4Y9X9YGT1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;