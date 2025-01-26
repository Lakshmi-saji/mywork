// Function to validate signup form and redirect to the main website page
function validateSignup() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple validation for empty fields
    if (username === "" || password === "") {
        alert("Please fill in both the username and password.");
        return false; // Prevent form submission
    }

    // You could add further validations for the username, password strength, etc.

    // If all validations are passed, proceed to simulate a successful signup
    alert("Signup successful!");

    // Redirect to the main website or dashboard after signup
    window.location.href = "main-page.html"; // Replace with your actual main page URL

    return true; // Allow form submission
}

// Function to go back to the previous page
function goBack() {
    window.history.back();
}
