// const fs = require('fs');

// function to encode file data to base64 encoded string
// function base64_encode(file) {
//     // read binary data
//     var bitmap = fs.readFileSync(file);
//     // convert binary data to base64 encoded string
//     return new Buffer(bitmap).toString('base64');
// }

async function newFormHandler(event) {
    event.preventDefault();
    let photo = document.getElementById("image-file").files[0];
    let formData = new FormData();
   
    console.log(photo);
    formData.append("photo", photo);
    console.log(formData);
    const response = await fetch(`/api/pic`, {
      method: 'POST',
      body: formData,
    });
    
    if (response.ok) {
      alert('pic uploaded');
    } else {
      alert('Failed to add pet');
    }
  }

  document
  .querySelector('#button')
  .addEventListener('click', newFormHandler);

