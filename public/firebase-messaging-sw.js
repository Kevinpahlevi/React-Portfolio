/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
importScripts('https://www.gstatic.com/firebasejs/5.8.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.8.2/firebase-messaging.js');
firebase.initializeApp({
    messagingSenderId: "969514745004"
});
const messaging = firebase.messaging();

// messaging.onMessage((payload) => {
//     console.log('Message received. ', payload);
//     // ...
//   });

  messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
  });