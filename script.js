function showSignUpForm() {
    const signUpForm = document.getElementById('sign-up-form');
    const logInForm = document.getElementById('log-in-form');

    logInForm.classList.add('hidden');
    setTimeout(() => {
        logInForm.style.display = 'none';
        signUpForm.style.display = 'block';
        setTimeout(() => {
            signUpForm.classList.remove('hidden');
            signUpForm.classList.add('active');
        }, 10);
    }, 500);
}

function showLogInForm() {
    const signUpForm = document.getElementById('sign-up-form');
    const logInForm = document.getElementById('log-in-form');

    signUpForm.classList.add('hidden');
    setTimeout(() => {
        signUpForm.style.display = 'none';
        logInForm.style.display = 'block';
        setTimeout(() => {
            logInForm.classList.remove('hidden');
            logInForm.classList.add('active');
        }, 10);
    }, 500);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function signUp() {
    const email = document.getElementById('email-sign-up').value;
    const emailError = document.getElementById('email-sign-up-error');
    const password = document.getElementById('password-sign-up').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const confirmPasswordError = document.getElementById('confirm-password-error');

    // Validate email
    if (!isValidEmail(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        alert('Please enter a valid email address.');
        return;
    } else {
        emailError.textContent = '';
    }

    // Validate password and confirm password
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        alert('Passwords do not match.');
        return;
    } else {
        confirmPasswordError.textContent = '';
    }

    // Add sign-up logic here
    alert('Thanks for signing up!');
}

function logIn() {
    const email = document.getElementById('email-log-in').value;
    const emailError = document.getElementById('email-log-in-error');

    // Validate email
    if (!isValidEmail(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        alert('Please enter a valid email address.');
        return;
    } else {
        emailError.textContent = '';
    }

    // Add log-in logic here
    alert('Thanks for logging in!');
}

document.getElementById('toggle-password-sign-up').addEventListener('click', function () {
    const passwordField = document.getElementById('password-sign-up');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});

document.getElementById('toggle-confirm-password').addEventListener('click', function () {
    const passwordField = document.getElementById('confirm-password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});

document.getElementById('toggle-password-log-in').addEventListener('click', function () {
    const passwordField = document.getElementById('password-log-in');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});