const commentPostHandler = async (event) => {
    event.preventDefault();

    // Collect values from the login form
    const user = document.querySelector('#email-login').value.trim();
    const comment = document.querySelector('#comment-form').value.trim();

    if (user && comment) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ user, comment }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace('/article');
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('#comment')
    .addEventListener('click', commentPostHandler);