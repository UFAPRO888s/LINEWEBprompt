// Modular Firebase v.9 Initialization.
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "@firebase/database";

const clientCredentials = {
  apiKey: "AIzaSyDuivDkvHf9wp3WuvwI7TsCwtEbMnhpgVQ",
  authDomain: "buudata-f65f7.firebaseapp.com",
  databaseURL:
    "https://buudata-f65f7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "buudata-f65f7",
  storageBucket: "buudata-f65f7.appspot.com",
  messagingSenderId: "248394626599",
  appId: "1:248394626599:web:7b861c4d08d7f684c38002",
  measurementId: "G-4GHZDCW5R8",
};

function initFirebase() {
  if (typeof window !== undefined) {
    initializeApp(clientCredentials);
    console.log("Firebase has been init successfully");
  }
}

const app = initializeApp(clientCredentials);

const db = getFirestore(app);

const realDB = getDatabase(app);

export { initFirebase, db, realDB };
