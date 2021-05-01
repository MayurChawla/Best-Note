import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import reportWebVitals from './reportWebVitals';

// const firebase = require('firebase/app');
require('firebase/firestore');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDcy95DssuiWCKDhcHjsqoLe2IHl7N5Lc",
  authDomain: "best-note-dcb77.firebaseapp.com",
  projectId: "best-note-dcb77",
  storageBucket: "best-note-dcb77.appspot.com",
  messagingSenderId: "1075645613662",
  appId: "1:1075645613662:web:8595953bf81f3198e3d6cf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("bestnote-container")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
