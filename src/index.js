import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as firebase from 'firebase';

import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import injectTapEventPlugin from 'react-tap-event-plugin';


import Signin from './components/signin';
import Signup from './components/signup';
import Showpakring from './components/showparking';


// Initialize Firebase
  var config = {
    apiKey: "AIzaSyD3hdOBWpIcZrxQ7uOzlKKXHBkaa1BvoEw",
    authDomain: "project1-e65a8.firebaseapp.com",
    databaseURL: "https://project1-e65a8.firebaseio.com",
    projectId: "project1-e65a8",
    storageBucket: "",
    messagingSenderId: "710096050063"
  };
  firebase.initializeApp(config);

injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider>
    <Router>
        <div>    
          <Route path="/" exact component={App} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/parking" component={Showpakring} />
        </div>
    </Router>    
    </MuiThemeProvider>
    , document.getElementById('root'));
registerServiceWorker();
