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



const editPost = async (event) => {
  event.preventDefault();


  const indexArea = event.target.getAttribute("data-idx")
  console.log(indexArea)

  const textArea = document.getElementById({ indexArea });



  console.log(textArea.value)


  // try {
  //   const response = await fetch(`/api/posts/${blogid}`, {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //   });

  //   // location.reload();
  // } catch (err) {
  //   console.log(err);
  // }


}






let deleteButtons = document.querySelectorAll("#btn-delete");
let editButtons = document.querySelectorAll("#btn-edit");

if (document.querySelector("#btn-delete")) {
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", (event) => {
      deletePost(event, i);
    });
  }

};


if (document.querySelector("#btn-edit")) {
  for (let i = 0; i < editButtons.length; i++) {
    editButtons[i].addEventListener("click", (event) => {
      console.log(event.target.getAttribute("data-idx"))
      editPost(event, i);
    });
  }

};


