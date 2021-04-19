import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp (
    {
        apiKey: "AIzaSyBsZeJHSPl1L--xZPiJJaHCleQapPsQ8BQ",
        authDomain: "proyecto-coder-8d336.firebaseapp.com",
        projectId: "proyecto-coder-8d336",
        storageBucket: "proyecto-coder-8d336.appspot.com",
        messagingSenderId: "802909666748",
        appId: "1:802909666748:web:d47160673d89b22e667fb9"
    }
)

export const getFirebase = () => {
    return app;
}

export const getFirestore = () => {
    return firebase.firestore(app)
}