import firebase from 'firebase/app';

import 'firebase/firestore';

// @TODO move to configs folder
const config = {
    apiKey: "AIzaSyD7i0tnxhOW0KiELuqxdKt3j30IwbovJwk",
    authDomain: "react-app-with-rx-backend.firebaseapp.com",
    databaseURL: "https://react-app-with-rx-backend.firebaseio.com",
    projectId: "react-app-with-rx-backend",
    storageBucket: "react-app-with-rx-backend.appspot.com",
    messagingSenderId: "170664276424",
    appId: "1:170664276424:web:03350f784e313dac5810fd"
};
firebase.initializeApp(config);

export default firebase;