import firebase from "react-native-firebase";
const config = {
  apiKey: "AIzaSyDEvOQfcRxyFWzp4qkHDZj7fDeDFfZMFL0",
  authDomain: "goapp-efc71.firebaseapp.com",
  databaseURL: "https://goapp-efc71.firebaseio.com",
  projectId: "goapp-efc71",
  storageBucket: "goapp-efc71.appspot.com",
  messagingSenderId: "820743980561"
};
firebase.initializeApp(config);

export default firebase;
