import firebase from 'firebase/app'
import '@firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAz-CrGNnbVMuydwfEUKBvllWLMWEjQRTY",
    authDomain: "mystockstrader.firebaseapp.com",
    databaseURL: "https://mystockstrader.firebaseio.com",
    projectId: "mystockstrader",
    storageBucket: "mystockstrader.appspot.com",
    messagingSenderId: "979750132661",
    appId: "1:979750132661:web:9584efb122e411898ad7fc"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()
