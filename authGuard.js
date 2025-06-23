// authGuard.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAy1B5JwAeoStXYWxe3L44L4NFp3u1r_l8",
  authDomain: "cyber-boy-3741e.firebaseapp.com",
  projectId: "cyber-boy-3741e",
  storageBucket: "cyber-boy-3741e.firebasestorage.app",
  messagingSenderId: "906376329397",
  appId: "1:906376329397:web:48882cf29b08ac932266fc",
  measurementId: "G-GQBG9SGKXG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (!user) {
    alert("⚠️ Please login to access this page.");
    window.location.href = "login.html";
  }
});