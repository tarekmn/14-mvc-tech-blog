let state = 0;

const createComment = async (event) => {
  event.preventDefault();
  console.log("correctBTN");

  state++;

  if (state === 1) {
    const cardBody = document.querySelector(".card-body");
    // cardBody.style.border = "red 5px solid";
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.className = "commentField";
    cardBody.append(x);
  } else if (state === 2) {
    state = 0;
    console.log("saving data");
    const content = document.querySelector(".commentField").value;
    // console.log(content);
    // console.log(event.target);
    // console.log(event.target.dataset.blogid);

    let blog_id = event.target.dataset.blogid;
    //Need to get current 1. blog data, 2.user data,  3. assign comment to blog in mysql. Several api's just not sure how to go about it.
    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({ content, blog_id }),
        headers: { "Content-Type": "application/json" },
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  } else {
    console.log("already pressed");
  }
};

const createPost = (event) => {
  event.preventDefault();

  const postBody = document.querySelector("#postDiv");
  const belowPost = document.querySelector(".belowPost");
  const y = document.createElement("textarea");
  y.setAttribute("type", "text");
  y.className = "postField";
  belowPost.append(y);

  const postVal = document.querySelector(".postField").value;
  console.log(postVal);

  //   //Need to get current 1. blog data, 2.user data,  3. assign comment to blog in mysql. Several api's just not sure how to go about it.
  //   fetch("/dashboard").then((res) => {
  //     console.log(res);
  //   });
  // } else {
  //   console.log("already pressed");
  // }
};
let commentButtons = document.querySelectorAll(".btn-comment");
console.log(commentButtons);

for (let i = 0; i < commentButtons.length; i++) {
  commentButtons[i].addEventListener("click", createComment);
}

document.querySelector("#postbtn").addEventListener("click", createPost);
