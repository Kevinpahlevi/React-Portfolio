import firebase from 'firebase';
export const initializeFirebase = () => {
  firebase.initializeApp({
    // taken from your project settings --> cloud messaging
    messagingSenderId: "969514745004"
  });
}