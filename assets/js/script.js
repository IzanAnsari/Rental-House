'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navToggleFunc = function () {
  navToggleBtn.classList.toggle("active");
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

navToggleBtn.addEventListener("click", navToggleFunc);
overlay.addEventListener("click", navToggleFunc);

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", navToggleFunc);
}



/**
 * header active on scroll
 */

const header = document.querySelector("[data-header]");

document.addEventListener("DOMContentLoaded", function() {
  const registerBtn = document.querySelector(".register-btn");
  const userBtn = document.querySelector(".user-btn");
  
  // Check localStorage on page load
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn === "true") {
    // Change register icon and text
    registerBtn.innerHTML = '<ion-icon name="log-out-outline"></ion-icon><span id="register-label">Logout</span>';
    // Hide user icon
    userBtn.style.display = "none";
  }
  
  registerBtn.addEventListener("click", function(event) {
    event.preventDefault();
    // Toggle login/logout state
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      // Logout
      localStorage.setItem("isLoggedIn", "false");
      // Change register icon and text
      registerBtn.innerHTML = '<ion-icon name="car-outline"></ion-icon><span id="register-label">Register</span>';
      // Show user icon
      userBtn.style.display = "inline-block";
    } else {
      // Login
      localStorage.setItem("isLoggedIn", "true");
      // Change register icon and text
      registerBtn.innerHTML = '<ion-icon name="log-out-outline"></ion-icon><span id="register-label">Logout</span>';
      // Hide user icon
      userBtn.style.display = "none";
    }
  });
  
  userBtn.addEventListener("click", function(event) {
    event.preventDefault();
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      // Clear localStorage
      localStorage.clear();
      // Change user icon
      userBtn.style.display = "inline-block";
    } else {
      // Redirect to login page
      window.location.href = "./view/login.html";
    }
  });
});
