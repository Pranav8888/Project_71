import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyDr5FHt0H3HAxRw6-B5IuY93w3A7K5Mpo4",

  authDomain: "complaintforum-a929b.firebaseapp.com",

  projectId: "complaintforum-a929b",

  storageBucket: "complaintforum-a929b.appspot.com",

  messagingSenderId: "767363547285",

  appId: "1:767363547285:web:74a4d6617360f547b81b9c"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore()

