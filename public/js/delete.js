async function deleteFormHandler(event) {
    event.preventDefault();
   
    
   
    
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  

  
    const response = await fetch(`/api/dish/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({
        id
      }),
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
  
  document.querySelector('.delete-pet-form').addEventListener('submit', deleteFormHandler);
  