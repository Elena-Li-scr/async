const button = document.querySelector("button");
let list = document.querySelector(".users");
let start = document.querySelector(".start");
let error = document.querySelector(".error");

try {
  button.addEventListener("click", function () {
    list.style.display = "none";
    button.style.display = "none";
    setTimeout(() => {
      button.style.display = "block";
    }, 3000);
    list.innerHTML = "";
    start.style.display = "block";
    setTimeout(async () => {
      try {
        let responce = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        let users = await responce.json();
        for (let user of users) {
          const item = document.createElement("li");
          item.textContent = user.name;
          list.appendChild(item);
        }
        start.style.display = "none";
        list.style.display = "block";
      } catch (fetchError) {
        error.innerHTML = "Ошибка при загрузке данных: " + fetchError.message;
      }
    }, 2000);
  });
} catch (mainError) {
  error.innerHTML = "Ошибка: " + mainError.message;
}
