const loginLogout = async (event) => {
  event.preventDefault();
  const choice = event.target.textContent.trim();
  console.log(choice);

  if (choice === "Logout") {
    const response = await fetch("/api/users/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    console.log(response);
    if (response.ok) {
      document.location.replace("/login");
    } else {
      alert(response.statusText);
    }
  } else {
    // send to login page
    document.location.replace("/login");
  }
};

console.log("hello");
document.querySelector(".auth").addEventListener("click", loginLogout);
