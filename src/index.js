import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyAao6_nUVSdPWU5bO6rlYL8Qe08_qjdwxc",
  authDomain: "date-counter-afb5e.firebaseapp.com",
  databaseURL: "https://date-counter-afb5e.firebaseio.com",
  projectId: "date-counter-afb5e",
  storageBucket: "date-counter-afb5e.appspot.com",
  messagingSenderId: "33396581021",
  appId: "1:33396581021:web:edfdc6bc964a69d5db2a74"
};

firebase.initializeApp(firebaseConfig);

export const DATABASE = firebaseConfig.databaseURL

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
