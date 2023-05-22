const addPostFormHandler = async (event) => {
    event.preventDefault();

    // Get the title and text from the form
    const title = document.querySelector('#post-title').value.trim();
    const text = document.querySelector('#post-text').value.trim();

    // If both fields have content
    if (title && text) {
        // POST the new post to the database
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, text }),
            headers: { 'Content-Type': 'application/json' },
        });

        // If successful, redirect the browser to the dashboard page
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to add post');
        }
    }
};

document.querySelector('.new-post-form').addEventListener('submit', addPostFormHandler);

