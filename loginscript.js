// Sample login form handling (This can be extended to send the data to a backend)
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get values from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (You can extend this to check against a backend)
    if(username === "admin" && password === "password123") {
        alert("Login Successful!");
        // Redirect to another page or dashboard after login
        window.location.href = "dashboard.html";  // Change to your desired page
    } else {
        alert("Invalid Username or Password. Please try again.");
    }
});
