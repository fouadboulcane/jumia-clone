
import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBEP05l5V2jjYD7_EQBmUoEcPDLmLef_dI",
    authDomain: "jumia-clone-4925f.firebaseapp.com",
    databaseURL: "https://jumia-clone-4925f.firebaseio.com",
    projectId: "jumia-clone-4925f",
    storageBucket: "jumia-clone-4925f.appspot.com",
    messagingSenderId: "597884265909",
    appId: "1:597884265909:web:072eaeb2c9dfbd6f5fa5fc",
    measurementId: "G-W6LH0S3BNS"

    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_DATABASE_URL,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};



const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };