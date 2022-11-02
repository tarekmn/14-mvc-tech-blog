let stateP = 0;

const createPost = async (event) => {
  event.preventDefault();
  stateP++;

  if (stateP === 1) {
    const belowPost = document.querySelector(".belowPost");
    const titleinput = document.createElement("INPUT");
    const content = document.createElement("textarea");
    titleinput.setAttribute("type", "text");
    content.setAttribute("type", "text");
    titleinput.setAttribute("placeholder", "Insert title here!");
    content.setAttribute("placeholder", "Insert post body here!");
    titleinput.className = "titleField";
    content.className = "postField";
  

    belowPost.append(titleinput);
    belowPost.append(content);
  } else if (stateP === 2) {
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
      state = 0;

      location.reload();
    } catch (err) {
      console.log(err);
    }
  } else {
    console.log("already pressed");
  }
};

document.querySelector("#postbtn").addEventListener("click", createPost);
