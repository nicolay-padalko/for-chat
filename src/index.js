import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LoginComponent from './login/login';
import SignupComponent from './signup/signup';
import DashboardComponent from './dashboard/dashboard';

const firebase = require("firebase");
require("firebase/firebase");

firebase.initializeApp({
  apiKey: "AIzaSyAfIdgf5ZtMvhSN0KNln3BHrMWuHkynN8w",
  authDomain: "for-chat-152c1.firebaseapp.com",
  databaseURL: "https://for-chat-152c1.firebaseio.com",
  projectId: "for-chat-152c1",
  storageBucket: "for-chat-152c1.appspot.com",
  messagingSenderId: "1043953822544",
  appId: "1:1043953822544:web:1e79d328200058b10e1a55",
  measurementId: "G-XWGC9WQ9SS"
});

const routing = (
  <Router>
    <div id='routing-container'>
      <Route path='/login' component={LoginComponent}></Route>
      <Route path='/signup' component={SignupComponent}></Route>
      <Route path='/dashboard' component={DashboardComponent}></Route>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
