const createPost = async (event) => {
  event.preventDefault();

  const belowPost = document.querySelector(".belowPost");
  const titleinput = document.createElement("INPUT");
  const content = document.createElement("textarea");
  titleinput.setAttribute("type", "text");
  content.setAttribute("type", "text");
  titleinput.className = "titleField";
  content.className = "postField";
  belowPost.append(titleinput);
  belowPost.append(content);

  const title = document.querySelector(".titleField").value;
  const description = document.querySelector(".postField").value;
  console.log(title);
  console.log(description);

  try {
    const response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: { "Content-Type": "application/json" },
    });
    location.reload();
  } catch (err) {
    console.log(err);
  }
};

document.querySelector("#postbtn").addEventListener("click", createPost);
