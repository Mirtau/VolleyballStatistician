import Rebase from 're-base'
import firebase from 'firebase'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD7cuFjJcj3jqAcJQRR2pG3km4VGG63Ylw",
    authDomain: "volleyballstatistician.firebaseapp.com",
    databaseURL: "https://volleyballstatistician.firebaseio.com",
    projectId: "volleyballstatistician",
    storageBucket: "volleyballstatistician.appspot.com",
    messagingSenderId: "691566261056"
  };
  const app = firebase.initializeApp(config)
  const base = Rebase.createClass(app.database())
  const facebookProvider = new firebase.auth.FacebookAuthProvider()

  export {app, base, facebookProvider}
