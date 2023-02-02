async function newFormHandler(event) {
    event.preventDefault();
    const name = document.querySelector('#pet_name').value;
    const location = document.querySelector('#pet_location').value;
    const description = document.querySelector('#pet_description').value;
    const size = document.querySelector('#pet_size').value;
    const age = document.querySelector('#pet_age').value;
    const breed = document.querySelector('#pet_breed').value;
    let photo = document.getElementById("pet_image").files[0];
    let formData = new FormData();
    
   
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
    const res = await response.json().then( data => data);
    const pet_id = res.pet_id;
    console.log(pet_id);
    if (response.ok) {
      //document.location.replace('/petlist');
    } else {
      alert('Missing pet information');
      return
    }

    formData.append("photo", photo);
    formData.append("id", pet_id);
    const response2 = await fetch(`/api/pic`, {
      method: 'POST',
      body: formData,
    });
    
    if (response2.ok) {
      document.location.replace('/petlist');
    } else {
      alert('Missing pet picture');
    }
  }
  
  document.querySelector('.new-pet-form').addEventListener('submit', newFormHandler);