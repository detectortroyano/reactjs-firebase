import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp({
  apiKey: "AIzaSyAJvAAIrO164dLOko5weQGbwCAWdSV6Bb4",
  authDomain: "reactjs-firebase-a73f3.firebaseapp.com",
  databaseURL: "https://reactjs-firebase-a73f3.firebaseio.com",
  projectId: "reactjs-firebase-a73f3",
  storageBucket: "reactjs-firebase-a73f3.appspot.com",
  messagingSenderId: "840369610669"
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
