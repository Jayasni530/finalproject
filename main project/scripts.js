function validateForm() {
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var emailValid = email.checkValidity();
    var passwordValid = password.checkValidity();

    if (!emailValid) {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }

    if (!passwordValid) {
        password.classList.add('is-invalid');
    } else {
        password.classList.remove('is-invalid');
    }

    if (emailValid && passwordValid) {
        alert('Login successful!');
    }

    return emailValid && passwordValid;
}
