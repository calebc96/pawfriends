async function newFormHandler(event) {
    event.preventDefault();
    const name = document.querySelector('#pet_name').value;
    const location = document.querySelector('#pet_location').value;
    const description = document.querySelector('#pet_description').value;
    const size = document.querySelector('#pet_size').value;
    const age = document.querySelector('#pet_age').value;
    const breed = document.querySelector('#pet_breed').value;
    ;
    
   
    const response = await fetch(`/api/pet`, {
      method: 'POST',
      body: JSON.stringify({
       name, 
       location,
       description, 
       size, 
       age, 
       breed,

      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (response.ok) {
      document.location.replace('/petlist');
    } else {
      alert('Failed to add pet');
    }

    
  }
  
  document.querySelector('.new-pet-form').addEventListener('submit', newFormHandler);