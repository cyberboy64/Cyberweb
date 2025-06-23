// script.js (type="module" hona chahiye in HTML)

// Firebase imports (CDN se directly)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// ✅ Firebase config (replace with your own if needed)
const firebaseConfig = {
  apiKey: "AIzaSyAy1B5JwAeoStXYWxe3L44L4NFp3u1r_l8",
  authDomain: "cyber-boy-3741e.firebaseapp.com",
  projectId: "cyber-boy-3741e",
  storageBucket: "cyber-boy-3741e.appspot.com",
  messagingSenderId: "906376329397",
  appId: "1:906376329397:web:d2803c5ccd7c49fe2266fc",
  measurementId: "G-B2J37ZT4WM"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Register function (called on button click)
window.registerUser = function () {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please fill all fields");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("✅ Registered Successfully!");
      window.location.href = "login.html"; // Redirect to login page
    })
    .catch((error) => {
      alert("❌ " + error.message);
    });
};