const createComment = async (event) => {
  event.preventDefault();
  console.log("correctBTN");

  const cardBody = document.querySelector(".card-body");
  const comment = document.createElement("p");
  comment.innerHTML("testingcomments");

  cardBody.append(comment);
};

document.querySelector(".btn-comment").addEventListener("click", createComment);
