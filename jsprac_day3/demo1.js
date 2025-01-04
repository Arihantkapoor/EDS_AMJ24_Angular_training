const body = document.body;

const button = document.querySelector("button");

const id = setInterval(() => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const rgb  = `rgb(${red},${green},${blue})`;
    body.style.backgroundColor  = rgb;

}, 100);


button.addEventListener("click",()=>{
    clearInterval(id);
    button.textContent = body.style.backgroundColor;
})

