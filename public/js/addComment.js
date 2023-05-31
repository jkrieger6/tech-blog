const addCommentFormHandler = async (event) => {
  event.preventDefault();

  // Get the comment text from the form
  const comment_text = document.querySelector("#comment").value.trim();

  // Get the post id from the url
  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  // If the comment has text, post it to the database
  if (comment_text) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ post_id, comment_text }),
      headers: { "Content-Type": "application/json" },
    });

    // If successful, reload the page
    if (response.ok) {
      document.location.reload();
    } else {
      alert("Failed to add comment");
    }
  }
};

document
  .getElementById("commentBtn")
  .addEventListener("submit", addCommentFormHandler);
