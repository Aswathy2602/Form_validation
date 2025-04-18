function clearError(id) {
    document.getElementById(id).innerText = "";
    document.getElementById("successMessage").innerText = "";
  }
  
  function validateForm(e) {
    e.preventDefault();
  
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();
    let valid = true;
  
    if (name.length < 5) {
      document.getElementById("nameError").innerText = "Name must be at least 5 characters";
      valid = false;
    }
  
    if (!email.includes("@")) {
      document.getElementById("emailError").innerText = "Enter a valid email";
      valid = false;
    }
  
    if (phone.length !== 10 || phone === "1234567890" || isNaN(phone)) {
      document.getElementById("phoneError").innerText = "Enter a valid 10-digit phone number";
      valid = false;
    }
  
    if (password.length < 8 || password.toLowerCase() === "password" || password.toLowerCase() === name.toLowerCase()) {
      document.getElementById("passwordError").innerText = "Password is not strong";
      valid = false;
    }
  
    if (password !== confirmPassword) {
      document.getElementById("confirmPasswordError").innerText = "Passwords do not match";
      valid = false;
    }
  
    if (valid) {
      document.getElementById("successMessage").innerText = "Form submitted successfully!";
      document.getElementById("registerForm").reset();
    }
  }
  