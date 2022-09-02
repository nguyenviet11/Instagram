import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
    apiKey: "AIzaSyByeaUJ8yMKD2BV_fx-tsUvww5n7T3teUc",
    authDomain: "instagram-refund.firebaseapp.com",
    projectId: "instagram-refund",
    storageBucket: "instagram-refund.appspot.com",
    messagingSenderId: "801937973123",
    appId: "1:801937973123:web:0c92a4732c0215412de0b6"

};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };