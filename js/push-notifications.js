import * as firebase from "firebase";

var config = {
  apiKey: "xxxxxxxxxxxx",
  authDomain: "xxx.firebaseapp.com",
  databaseURL: "https://xxx.firebaseio.com",
  projectId: "xxx",
  storageBucket: "xxx.appspot.com",
  messagingSenderId: "xxxxxxxxxxxx"
}; // 4. Get Firebase Configuration
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.usePublicVapidKey("xxxxxxx"); // 1. Generate a new key pair

// Request Permission of Notifications
messaging
  .requestPermission()
  .then(() => {
    console.log("Notification permission granted.");

    // Get Token
    messaging.getToken().then(token => {
      console.log(token);
    });
  })
  .catch(err => {
    console.log("Unable to get permission to notify.", err);
  });
