// register.js

import { auth } from "./firebaseConfig.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

window.registerUser = function () {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("✅ Registered successfully!");
      localStorage.setItem("loggedIn", "true");
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert("❌ " + error.message);
    });
};