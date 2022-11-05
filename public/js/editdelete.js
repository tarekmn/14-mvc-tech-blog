// let stateP = 0;

const deletePost = async (event) => {
  event.preventDefault();

  const blogid = event.target.dataset.blogid;
  console.log(blogid);
  console.log("deletebutton");

  try {
    const response = await fetch(`/api/posts/${blogid}`, {
      method: "Delete",
      headers: { "Content-Type": "application/json" },
    });

    location.reload();
  } catch (err) {
    console.log(err);
  }
};

// document.querySelector("#btn-delete").addEventListener("click", deletePost);
