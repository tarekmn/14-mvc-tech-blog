let state = 0;

const createComment = async (event, i) => {
  event.preventDefault();
  console.log("correctBTN");

  state++;

  if (state === 1) {
    const cardBody = document.querySelector(`.card-body${i}`);
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.className = "commentField";
    cardBody.append(x);
  } else if (state === 2) {
    console.log("saving data");
    const content = document.querySelector(".commentField").value;
    let blog_id = event.target.dataset.blogid;
    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({ content, blog_id }),
        headers: { "Content-Type": "application/json" },
      });
      state = 0;
      location.reload();
    } catch (err) {
      console.log(err);
    }
  } else {
    console.log("already pressed");
  }
};

let commentButtons = document.querySelectorAll(".btn-comment");
console.log(commentButtons);

for (let i = 0; i < commentButtons.length; i++) {
  commentButtons[i].addEventListener("click", (event) => {
    createComment(event, i);
  });
}
