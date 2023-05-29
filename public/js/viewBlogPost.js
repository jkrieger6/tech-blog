// Handler to view a blog post
const viewPostHandler = async (event) => {
  event.preventDefault();

  // Get the post id from the url
  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  // GET the post from the database
  const response = await fetch(`/api/posts/${post_id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  // If successful, redirect the browser to the dashboard page
  if (response.ok) {
    document.location.replace(`/posts/${post_id}`);
  }
};

document.getElementById("view-post").addEventListener("click", viewPostHandler);
