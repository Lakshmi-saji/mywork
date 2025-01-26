// Function to validate login and redirect to the main page
function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple validation for demonstration
    if (username === "" || password === "") {
        alert("Please fill in both the username and password.");
        return false; // Prevent form submission
    }

    // In a real-world scenario, you would send the credentials to the server for verification
    // For this example, after validation, we redirect the user to the main page

    alert("Login successful!");

    // Redirecting to the main page (you can replace 'main-page.html' with your actual main page URL)
    window.location.href = "main-page.html";

    return true; // Allow form submission
}

// Function to go back to the previous page
function goBack() {
    window.history.back();
}
