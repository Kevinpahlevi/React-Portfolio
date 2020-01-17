import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import serviceWorker from './serviceWorker';
import { initializeFirebase, showMessage } from './push'

// serviceWorker()
async function init() {
 await initializeFirebase()
 await showMessage()
}

init()


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
