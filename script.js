const inputs = document.querySelectorAll('input');
const password = document.querySelector('#password');
const passwordConfirmation = document.querySelector('#passwordConfirmation');
const passwordConfirmationText = document.querySelector('#password-confirmation-text');


inputs.forEach(input => {
    input.addEventListener('focusout', () => {
        if(!input.checkValidity()) {
            input.classList.add('invalid-input')
        } else {
            input.classList.remove('invalid-input');
        }
    })
})

passwordConfirmation.addEventListener('keyup', () => {
    if (password.value !== passwordConfirmation.value) {
        passwordConfirmationText.classList.remove('hidden');
    } else {
        passwordConfirmationText.classList.add('hidden');
    }
})