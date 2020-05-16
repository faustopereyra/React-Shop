import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"

const config = {
    apiKey: "AIzaSyCMmm4hweCOFQcl_zJ_t1hQNgEmcMWKfz4",
    authDomain: "react-shop-dffec.firebaseapp.com",
    databaseURL: "https://react-shop-dffec.firebaseio.com",
    projectId: "react-shop-dffec",
    storageBucket: "react-shop-dffec.appspot.com",
    messagingSenderId: "1021635263569",
    appId: "1:1021635263569:web:a1e3ad0de9ef5e94eecc70"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;