import firebase from 'firebase';
import '@firebase/messaging';
export const initializeFirebase = () => {

  var firebaseConfig = {
    apiKey: "AIzaSyDzmM9Fm1YpKnV2Uya-PHnqSNmDRyR2gG0",
    authDomain: "test-project-8dc3c.firebaseapp.com",
    databaseURL: "https://test-project-8dc3c.firebaseio.com",
    projectId: "test-project-8dc3c",
    storageBucket: "",
    messagingSenderId: "969514745004",
    appId: "1:969514745004:web:b46ef082bf5753bd7e3309"
  };

  firebase.initializeApp(firebaseConfig);

  
  let messaging;
  if(firebase.messaging.isSupported()) {
    console.log('supported')
    messaging = firebase.messaging();
  }

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
      console.log('regris service');
      
        const registration = await navigator.serviceWorker.register('./firebase-messaging-sw.js', {
            updateViaCache: 'none'
        });
        messaging.useServiceWorker(registration);
    });
  }
  // navigator.serviceWorker
  //   .register('/firebase-messaging-sw.js')
  //   .then((registration) => {
  //     firebase.messaging().useServiceWorker(registration);
  //   });

  messaging.onMessage((payload) => {
    console.log('Message received. ', payload);
    // ...
  });
}

export const ask = async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log("token",token);
    return token

  } catch (error) {
    console.error(error);
  }
}
