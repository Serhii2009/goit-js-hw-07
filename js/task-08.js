const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (i) {
  i.preventDefault();

  const formData = new FormData(loginForm);

  const userData = {};

  formData.forEach((value, key) => {
    userData[key] = value;
  });

  if (!userData.email || !userData.password) {
    alert('Будь ласка, заповніть усі поля форми');
  } else {
    console.log(userData);
    loginForm.reset();
  }
});
