import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyD2NstXAI5oyv9S2wTjJT2wgtLAr2gh--E",
    authDomain: "shop-review-app-706e5.firebaseapp.com",
    projectId: "shop-review-app-706e5",
    storageBucket: "shop-review-app-706e5.appspot.com",
    messagingSenderId: "882153088100",
    appId: "1:882153088100:web:c3093fff92acb647f1ab71",
    measurementId: "G-0YXF1SYZV1"
  })
}

export default firebase
