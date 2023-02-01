const loginFormHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Gather the data from the form elements on the page
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
console.log(email, password)
  if (email && password) {
    // Send the e-mail and password to the server
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password}),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/petlist');
    } else {
      alert('Failed to log in');
    }
  }
};
const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#inputName').value.trim();
  const email = document.querySelector('#inputEmail').value.trim();
  const password = document.querySelector('#inputPassword').value.trim();
  const phonenumber = document.querySelector('#inputNumber').value.trim();

  if (name && email && password && phonenumber) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password, phonenumber }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/petlist');
    } else {
      alert(response.statusText);
    }
  }
};

document
.querySelector('.signup-form')
.addEventListener('submit', signupFormHandler);
document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);




