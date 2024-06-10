function validateForm() {
    var fullName = document.getElementById('fullName');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirmPassword');

    var fullNameValid = fullName.checkValidity();
    var emailValid = email.checkValidity();
    var passwordValid = password.checkValidity();
    var confirmPasswordValid = confirmPassword.checkValidity() && (password.value === confirmPassword.value);

    if (!fullNameValid) {
        fullName.classList.add('is-invalid');
    } else {
        fullName.classList.remove('is-invalid');
    }

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

    if (!confirmPasswordValid) {
        confirmPassword.classList.add('is-invalid');
    } else {
        confirmPassword.classList.remove('is-invalid');
    }

    if (fullNameValid && emailValid && passwordValid && confirmPasswordValid) {
        alert('Registration successful!');
    }

    return fullNameValid && emailValid && passwordValid && confirmPasswordValid;
}
