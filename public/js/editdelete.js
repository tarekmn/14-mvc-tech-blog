// let stateP = 0;

const deletePost = async (event) => {
  event.preventDefault();

  console.log("deletebutton");

  try {
    const response = await fetch(`/api/delete/${id}`, {
      method: "Delete",
      id: blog_id,
      headers: { "Content-Type": "application/json" },
    });

    // location.reload();
  } catch (err) {
    console.log(err);
  }
};

document.querySelector("#btn-delete").addEventListener("click", deletePost);
