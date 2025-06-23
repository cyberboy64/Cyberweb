// firebaseConfig.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy1B5JwAeoStXYWxe3L44L4NFp3u1r_l8",
  authDomain: "cyber-boy-3741e.firebaseapp.com",
  projectId: "cyber-boy-3741e",
  storageBucket: "cyber-boy-3741e.firebasestorage.app",
  messagingSenderId: "906376329397",
  appId: "1:906376329397:web:48882cf29b08ac932266fc",
  measurementId: "G-GQBG9SGKXG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

// Export auth to use in login.js and register.js
export { auth };