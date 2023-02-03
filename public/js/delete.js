async function deleteFormHandler(event) {
    event.preventDefault();
   
    
   
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
  console.log(id);

  
    const response = await fetch(`/api/pet/${id}`, {
      method: 'delete',
     
      headers: {
        'Content-Type': 'application/json',
      },
    });
  

    if (response.ok) {
      document.location.replace(`/petlist`);
    } else {
      alert('Failed to delete');
    }
  }
  
  const delButton = document.querySelector('.delete-pet-form');
  if (delButton) {
    delButton.addEventListener('click', deleteFormHandler);
  }
  
  