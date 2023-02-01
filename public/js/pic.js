const fs = require('fs');

const photo = document.getElementById("image-file").files[0];
const submit = document.getElementById("button");



// function to encode file data to base64 encoded string
function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}

async function newFormHandler(event) {
    event.preventDefault();
    const photo = document.getElementById("image-file").files[0];

    const blobPic = await base64_encode(photo);
   
    const response = await fetch(`/api/pic`, {
      method: 'POST',
      body: JSON.stringify({ pet_picture: blobPic, pet_id: 1}),
      headers: {
        'Content-Type': 'application/json',
      },
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

