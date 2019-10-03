importScripts('https://www.gstatic.com/firebasejs/5.8.2/firebase-app.js'); <-- check for last version
importScripts('https://www.gstatic.com/firebasejs/5.8.2/firebase-messaging.js'); <-- check for last version
firebase.initializeApp({
    messagingSenderId: "969514745004"
});
const messaging = firebase.messaging();