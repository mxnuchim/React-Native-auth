// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSjR7eqhgN0k2znOj5saoopSwrOmEiJfo",
  authDomain: "react-native-auth-app-d4430.firebaseapp.com",
  projectId: "react-native-auth-app-d4430",
  storageBucket: "react-native-auth-app-d4430.appspot.com",
  messagingSenderId: "883259170210",
  appId: "1:883259170210:web:d1529a034e96e50c5ce6fb"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };