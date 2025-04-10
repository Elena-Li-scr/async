const button = document.querySelector("button");
let list = document.querySelector('ul');
button.addEventListener("click", function () {
    document.querySelector('.start').style.display = 'block';
    setTimeout(async () => {
        let responce = await fetch('https://jsonplaceholder.typicode.com/users'
        );
        let users = await responce.json();
    },2000)  
    
    for(let user of users) {
        list.innerHTML = 
    }
});
