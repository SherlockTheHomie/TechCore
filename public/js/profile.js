const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#project-title').value.trim();
  const description = document.querySelector('#project-desc').value.trim();

  if (title && description) {
    const response = await fetch(`/api/article`, {
      method: 'POST',
      body: JSON.stringify({ title, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to post article');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id') && event.target.matches("#deletebtn")) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/article/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete article');
    }
  }
};

const updateButtonHandler = async (event) => {
    event.preventDefault();
  const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/article/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: document.getElementById('edit-project-title').value,
        description: document.getElementById('edit-project-desc').value,
      }),
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to update article');
    }
};


document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('#updatebutton')
  .addEventListener('click', updateButtonHandler);  

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);
