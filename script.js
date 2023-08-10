let input = document.querySelector("input");
let submit = document.querySelector("Submit-btn");

function Redirect() {
  const username = input.value;
  if (username === "") {
    return alert("Please enter your name");
  } else {
    localStorage.setItem("username", username);
    location.href = "./home.html";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const username = localStorage.getItem("username");
  const usernamePlaceholder = document.getElementById("username-placeholder");
  if (username) {
    usernamePlaceholder.textContent = username;
    document.title = `Hello ${username}`;
  }
});

// Filtering Items
const filterButtons = document.querySelectorAll(".btn");
const itemsContainers = document.querySelectorAll(".store-item > div");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filtter");

    // Hide all items
    itemsContainers.forEach((container) => {
      container.style.display = "none";
    });

    // Show the selected category's items
    if (filter === "all") {
      itemsContainers.forEach((container) => {
        container.style.display = "flex";
      });
    } else {
      const filteredContainer = document.querySelector(`.${filter}`);
      if (filteredContainer) {
        filteredContainer.style.display = "flex";
      }
    }
  });
});
