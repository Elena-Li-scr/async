const button = document.querySelector("button");
let list = document.querySelector(".users");
let start = document.querySelector(".start");
let error = document.querySelector(".error");

try {
  button.addEventListener("click", function () {
    error.style.display = "none";
    list.style.display = "none";
    button.style.display = "none";
    setTimeout(() => {
      button.style.display = "block";
    }, 3000);
    list.innerHTML = "";
    start.style.display = "block";
    setTimeout(async () => {
      try {
        let response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Failed to load users.");
        }
        let users = await response.json();
        for (let user of users) {
          const item = document.createElement("li");
          item.textContent = user.name;
          list.appendChild(item);
        }
        start.style.display = "none";
        list.style.display = "block";
      } catch (fetchError) {
        start.style.display = "none";
        list.style.display = "none";
        error.style.display = "block";
        error.textContent = "Failed to load users.";
        error.style.color = "red";
      }
    }, 2000);
  });
} catch (mainError) {
  start.style.display = "none";
  list.style.display = "none";
  error.style.display = "block";
  error.textContent = "Failed to load users.";
  error.style.color = "red";
}
