import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAe0t2aRPZcutEBO7hjXp4rO-T-078QM2o",
    authDomain: "bus-bench.firebaseapp.com",
    databaseURL: "https://bus-bench.firebaseio.com",
    projectId: "bus-bench",
    storageBucket: "bus-bench.appspot.com",
    messagingSenderId: "1003500493080",
    appId: "1:1003500493080:web:f6ac4616aebe0188"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;