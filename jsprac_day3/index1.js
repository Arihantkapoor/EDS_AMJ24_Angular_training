const body = document.body;

const input = document.querySelector("input");

input.addEventListener("input",()=>{
    body.style.backgroundColor = input.value;
})