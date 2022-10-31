const createPost = async (event) => {
  event.preventDefault();

  const belowPost = document.querySelector(".belowPost");
  const title = document.createElement("INPUT");
  const content = document.createElement("textarea");
  title.setAttribute("type", "text");
  content.setAttribute("type", "text");
  title.className = "titleField";
  content.className = "postField";
  belowPost.append(title);
  belowPost.append(content);

  try {
    const title = document.querySelector(".titleField").value;
    const description = document.querySelector(".postField").value;
    console.log(title);
    console.log(description);

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
