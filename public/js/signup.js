const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#signup-name').value.trim();
    const email = document.querySelector('#signup-email').value.trim();
    const password = document.querySelector('#signup-pwd').value.trim();
    const phonenumber = document.querySelector('#signup-num').value.trim();
  
    if (name && email && password && phonenumber) {
      const response = await fetch('/api/users/', {
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