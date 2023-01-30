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
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
.querySelector('.signup-form')
.addEventListener('submit', signupFormHandler);