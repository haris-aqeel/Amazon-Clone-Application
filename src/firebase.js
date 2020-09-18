import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyB7poPa2ozSj5K3J6BmvsTeFrYMJgOIHo4",
    authDomain: "e-clone-application.firebaseapp.com",
    databaseURL: "https://e-clone-application.firebaseio.com",
    projectId: "e-clone-application",
    storageBucket: "e-clone-application.appspot.com",
    messagingSenderId: "54534292840",
    appId: "1:54534292840:web:59b0fa8dd642de92b682dd",
    measurementId: "G-RT03HYXL3M"}

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};