import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyCGmGRmWodct7gyf2JVNnXKrgLHNC2mqC4",
  authDomain: "musclefitness-3bde3.firebaseapp.com",
  databaseURL: "https://musclefitness-3bde3-default-rtdb.firebaseio.com",
  projectId: "musclefitness-3bde3",
  storageBucket: "musclefitness-3bde3.appspot.com",
  messagingSenderId: "731274335216",
  appId: "1:731274335216:web:3de3a387612b1343834335"
};

firebase.initializeApp(firebaseConfig);

export default firebase;