// import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyCU7F99BlOI1rZTobqxAtS5SAhDdVNKI2I",
//   authDomain: "movie-database-5047d.firebaseapp.com",
//   projectId: "movie-database-5047d",
//   storageBucket: "movie-database-5047d.appspot.com",
//   messagingSenderId: "309738074937",
//   appId: "1:309738074937:web:5e767bee23ab3665a42ee8",
// };

// const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase(app);

// const db = app.firestore();

// export { db };

// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCU7F99BlOI1rZTobqxAtS5SAhDdVNKI2I",
    authDomain: "movie-database-5047d.firebaseapp.com",
    projectId: "movie-database-5047d",
    storageBucket: "movie-database-5047d.appspot.com",
    messagingSenderId: "309738074937",
    appId: "1:309738074937:web:5e767bee23ab3665a42ee8",
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
