function validateLogin(event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    const user = validUsers.find(user => user.username === username && user.password === password);

    if (user) {
        errorMessage.textContent = "";
        showWelcomeScreen(user);
    } else {
        errorMessage.textContent = "Invalid username or password!";
    }
}

function showWelcomeScreen(user) {
    const loginContainer = document.getElementById("login-container");
    const welcomeScreen = document.getElementById("welcome-screen");
    const welcomeMessage = document.getElementById("welcome-message");
    const welcomeImage = document.getElementById("welcome-image");

    // Add transition for login container AFTER user logs in
    loginContainer.style.transition = "opacity 1s ease, transform 1s ease";
    loginContainer.style.opacity = "0";
    loginContainer.style.transform = "translateY(-50%)";
    loginContainer.style.pointerEvents = "none"; // Block interactions after hiding

    // Set welcome screen content
    welcomeMessage.textContent = user.message;
    welcomeImage.src = user.image;

    // Show welcome screen
    setTimeout(() => {
        welcomeScreen.style.opacity = 1;

        // Hide welcome screen and transition to dashboard after 3 seconds
        setTimeout(() => {
            welcomeScreen.style.opacity = 0;
            setTimeout(() => {
                window.location.href = "DashboardPage.html";
            }, 1000);
        }, 3000);
    }, 1000);
}

document.getElementById("login-form").addEventListener("submit", validateLogin);
