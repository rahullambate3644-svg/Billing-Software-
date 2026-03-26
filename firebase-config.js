import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"; // Add this

const firebaseConfig = {
 apiKey: "AIzaSyC7s28Ce9vaZsGuV68yQ_BcVzW5_-Y2w40",
  authDomain: "shree-8481d.firebaseapp.com",
  projectId: "shree-8481d",
  storageBucket: "shree-8481d.firebasestorage.app",
  messagingSenderId: "103491094528",
  appId: "1:103491094528:web:651f248d0fcae60e7470e5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app); // Export this
