const wrapper=document.querySelector('.wrapper');
const loginlink=document.querySelector('.login-link');
const registerlink=document.querySelector('.register-link');
const btnPopup=document.querySelector('.btnlogin-popup');
const iconclose=document.querySelector('.icon-close');

registerlink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});
loginlink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});
btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});
iconclose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});



// For Validations
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
  
    // Email validation function
    function isValidEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    }
  
    // Mobile number validation function
    function isValidMobile(mobile) {
      const re = /^[0-9]{10}$/; // Assuming a 10-digit mobile number
      return re.test(mobile);
    }
  
    // Login form validation
    loginForm.addEventListener('submit', (event) => {
      const emailInput = document.getElementById('login-email');
      const passwordInput = document.getElementById('login-password');
      const mobileInput = document.getElementById('login-mobile');
  
      if (!isValidEmail(emailInput.value)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
        return;
      }
      if (passwordInput.value.length < 6) {
        alert("Password must be at least 6 characters long.");
        event.preventDefault();
        return;
      }
      if (!isValidMobile(mobileInput.value)) {
        alert("Please enter a valid mobile number.");
        event.preventDefault();
        return;
      }
    });
  
    // Registration form validation
    registerForm.addEventListener('submit', (event) => {
      const usernameInput = document.getElementById('register-username');
      const emailInput = document.getElementById('register-email');
      const passwordInput = document.getElementById('register-password');
      const mobileInput = document.getElementById('register-mobile');
      const termsCheckbox = document.getElementById('register-terms');
  
      if (usernameInput.value.trim() === "") {
        alert("Username cannot be empty.");
        event.preventDefault();
        return;
      }
      if (!isValidEmail(emailInput.value)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
        return;
      }
      if (passwordInput.value.length < 6) {
        alert("Password must be at least 6 characters long.");
        event.preventDefault();
        return;
      }
      if (!isValidMobile(mobileInput.value)) {
        alert("Please enter a valid mobile number.");
        event.preventDefault();
        return;
      }
      if (!termsCheckbox.checked) {
        alert("You must agree to the terms and conditions.");
        event.preventDefault();
        return;
      }
    });
  });document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
  
    // Email validation function
    function isValidEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    }
  
    // Mobile number validation function
    function isValidMobile(mobile) {
      const re = /^[0-9]{10}$/; // 10-digit mobile number  validation
      return re.test(mobile);
    }
  
    // Login form validation
    loginForm.addEventListener('submit', (event) => {
      const emailInput = document.getElementById('login-email');
      const passwordInput = document.getElementById('login-password');
      const mobileInput = document.getElementById('login-mobile');
  
      if (!isValidEmail(emailInput.value)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
        return;
      }
      if (passwordInput.value.length < 6) {
        alert("Password must be at least 6 characters long.");
        event.preventDefault();
        return;
      }
      if (!isValidMobile(mobileInput.value)) {
        alert("Please enter a valid mobile number.");
        event.preventDefault();
        return;
      }
    });
  
    // Registration form validation
    registerForm.addEventListener('submit', (event) => {
      const usernameInput = document.getElementById('register-username');
      const emailInput = document.getElementById('register-email');
      const passwordInput = document.getElementById('register-password');
      const mobileInput = document.getElementById('register-mobile');
      const termsCheckbox = document.getElementById('register-terms');
  
      if (usernameInput.value.trim() === "") {
        alert("Username cannot be empty.");
        event.preventDefault();
        return;
      }
      if (!isValidEmail(emailInput.value)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
        return;
      }
      if (passwordInput.value.length < 6) {
        alert("Password must be at least 6 characters long.");
        event.preventDefault();
        return;
      }
      if (!isValidMobile(mobileInput.value)) {
        alert("Please enter a valid mobile number.");
        event.preventDefault();
        return;
      }
      if (!termsCheckbox.checked) {
        alert("You must agree to the terms and conditions.");
        event.preventDefault();
        return;
      }
    });
  });