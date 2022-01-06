const commentPostHandler = async (event) => {
    console.log("deeznuts");
    event.preventDefault();

    // Collect values from the login form
    const comment = document.querySelector('#comment').value.trim();
    const article_id = document.querySelector('#commentPostId').value.trim();
    
    console.log(comment);
    console.log(article_id);

    if (comment && article_id) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({ comment, article_id }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.reload(document.location);
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('#submitbtn')
    .addEventListener('submit', commentPostHandler);