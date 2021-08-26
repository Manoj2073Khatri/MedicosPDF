import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import firebase from "firebase/app";

import ScrollToTop from './pages/customAnimation/scrollToTop';

const firebaseConfig = {
  apiKey: "AIzaSyAH4UburvLRDQ4r4YVEdc0OGzSDywmw6rw",
  authDomain: "medicos-pdf-web-test.firebaseapp.com",
  projectId: "medicos-pdf-web-test",
  storageBucket: "medicos-pdf-web-test.appspot.com",
  messagingSenderId: "705427343956",
  appId: "1:705427343956:web:2b1ea2da20ed90ae363bc1",
  measurementId: "G-8P0PFHTTPG"
};


if (!firebase.apps.length) {
  console.log("FIREBASE INITIALIZED")
  firebase.initializeApp(firebaseConfig);
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
