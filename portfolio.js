// Go to Page 1
function goBack() {
    window.location.href = "portfolio.html"; 
}

// Go to Page 2
function goToPage2() {
    window.location.href = "portfolio-page2.html";
}

function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "index.html"; // or whichever file is your login screen
}
