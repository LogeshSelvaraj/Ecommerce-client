import firebase from "firebase"

 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyC7L6EK1t0MoEhLqU0npDBf9BbiLK74kck",
    authDomain: "ecommerce-6a1b0.firebaseapp.com",
    databaseURL: "https://ecommerce-6a1b0.firebaseio.com",
    projectId: "ecommerce-6a1b0",
    storageBucket: "ecommerce-6a1b0.appspot.com",
    messagingSenderId: "708754772114",
    appId: "1:708754772114:web:8bb1be18518ae7e67ad64b",
    measurementId: "G-ZMQB2CEMBZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

//   export
export const auth=firebase.auth()
export const googleAuth= new firebase.auth.GithubAuthProvider