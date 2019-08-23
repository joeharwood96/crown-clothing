import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAOwm3-4uTu5FqQzFI5qFczeYNqGqFvteM",
    authDomain: "crown-db-aec09.firebaseapp.com",
    databaseURL: "https://crown-db-aec09.firebaseio.com",
    projectId: "crown-db-aec09",
    storageBucket: "",
    messagingSenderId: "370880121554",
    appId: "1:370880121554:web:5a3f2c326223865d"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;