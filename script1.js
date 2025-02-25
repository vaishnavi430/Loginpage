// Declare variables to store signup data
let signupEmail = '';
let signupPassword = '';

// Signup form submission
document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // JavaScript Validation for signup
  if (username === "" || email === "" || password === "") {
    alert("All fields are required!");
    return;
  }

  // Password Validation: 8 to 12 characters
  if (password.length < 8 || password.length > 12) {
    alert("Password must be between 8 and 12 characters!");
    return;
  }

  // Save the signup data
  signupEmail = email;
  signupPassword = password;

  // Use of prompt() for registration confirmation
  const confirmation = prompt("Please type 'yes' to confirm your registration:");

  if (confirmation && confirmation.toLowerCase() === 'yes') {
    alert("Registration successful!");
  } else {
    alert("Registration cancelled.");
  }
});

// Login functionality
document.getElementById('loginButton').addEventListener('click', function () {
  const loginEmail = document.getElementById('loginEmail').value;
  const loginPassword = document.getElementById('loginPassword').value;

  // JavaScript Validation for login
  if (loginEmail === "" || loginPassword === "") {
    alert("Both email and password are required!");
    return;
  }

  // Check if the login email and password match the signup data
  if (loginEmail === signupEmail && loginPassword === signupPassword) {
    // Password Validation: 8 to 12 characters
    if (loginPassword.length < 8 || loginPassword.length > 12) {
      alert("Login password must be between 8 and 12 characters!");
    } else {
      alert("Login successful!");
    }
  } else {
    alert("Incorrect email or password!");
  }
});
