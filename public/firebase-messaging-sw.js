/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
importScripts('https://www.gstatic.com/firebasejs/5.8.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.8.2/firebase-messaging.js');
firebase.initializeApp({
    messagingSenderId: "969514745004"
});
const messaging = firebase.messaging();