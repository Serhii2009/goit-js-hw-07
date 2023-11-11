const validationInput = document.querySelector('#validation-input');
const validationLength = parseInt(validationInput.getAttribute('data-length'));

validationInput.addEventListener('blur', () => {
  if (validationInput.value.length === validationLength) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
});
