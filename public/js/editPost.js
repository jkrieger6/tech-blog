const editPost = async (event) => {
  event.preventDefault();

  // Get the post id from the url
  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  // Get the title and text from the form
  const title = document.getElementById("post-title").value.trim();
  const text = document.getElementById("post-text").value.trim();

  // If both fields have content
  if (title && text) {
    // PUT the updated post to the database
    const response = await fetch(`/api/posts/${post_id}`, {
      method: "PUT",
      body: JSON.stringify({ title, text }),
      headers: { "Content-Type": "application/json" },
    });

    // If successful, redirect the browser to the dashboard page
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to edit post");
    }
  }
};

document.getElementById("update-post").addEventListener("submit", editPost);
