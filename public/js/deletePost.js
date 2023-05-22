const deletePost = async (event) => {
    event.preventDefault();

    // Get the post id from the url
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    // DELETE the post from the database
    const response = await fetch(`/api/posts/${post_id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });

    // If successful, redirect the browser to the dashboard page
    if (response.ok) {
        document.location.replace('/dashboard');
    }
};

document.querySelector('.delete-post-btn').addEventListener('click', deletePost);
