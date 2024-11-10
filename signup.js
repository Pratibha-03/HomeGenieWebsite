import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword , sendEmailVerification} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyBCBl1pYWySqXoJV5dlNN-DhjK2-FqimZY",
  authDomain: "homegenie-a0e0d.firebaseapp.com",
  databaseURL: "https://homegenie-a0e0d-default-rtdb.firebaseio.com",
  projectId: "homegenie-a0e0d",
  storageBucket: "homegenie-a0e0d.firebasestorage.app",
  messagingSenderId: "623541940884",
  appId: "1:623541940884:web:74deee5f0a70e64e757a81"
};
//ctrl x from here
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();



const submit = document.getElementById('submit');
if (submit) {
  submit.addEventListener("click", function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
{
    function validatePassword(password) {
      // Define the criteria
      
      const hasUpperCase = /[A-Z]/;
      const hasLowerCase = /[a-z]/;
      const hasNumber = /[0-9]/;
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
 
      // Check each criterion
      if (password.length < 8) {
          return "Password must be at least 8 characters long.";
      }
      if (!hasUpperCase.test(password)) {
          return "Password must contain at least one uppercase letter.";
      }
      if (!hasLowerCase.test(password)) {
          return "Password must contain at least one lowercase letter.";
      }
      if (!hasNumber.test(password)) {
          return "Password must contain at least one number.";
      }
      if (!hasSpecialChar.test(password)) {
          return "Password must contain at least one special character.";
      }
  
      // If all criteria are met
      return "Password is valid.";
  }
  const result = validatePassword(password);
alert(result);
}

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        sendEmailVerification(auth.currentUser)
        .then(()=>{



          alert("Email Verification is Sent!")
        })
        const user = userCredential.user;
        window.location.href = "./service.html";
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        // ..
      });

  });
} else {
  console.error("Element with ID 'submit' not found.");
}

