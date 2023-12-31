function login() {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(username)) {
    alert("Please enter a valid email address for the username.");
    return;
  }

  // Password validation
  if (!validatePassword(password)) {
    alert(
      "Invalid password. Password must contain an uppercase letter, a number, and no special characters other than @."
    );
    return;
  }

  // Check for the specific password to redirect to the dashboard
  if (password === "SmartServTest@123") {
    window.location.href = "dashboard.html";
  } else {
    alert("Incorrect password. Please try again.");
  }
}

function validatePassword(password) {
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]*$/;
  return passwordRegex.test(password);
}
