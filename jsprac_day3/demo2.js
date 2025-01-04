
const sample1 = document.querySelector('.sample1');
const sample2 = document.querySelector('.sample2');
const sample3 = document.querySelector('.sample3');


setTimeout(()=>{
    sample1.textContent = "One";
    sample1.style.color = "red";

    setTimeout(()=>{
        sample2.textContent = "Two";
        sample2.style.color = "green";

        setTimeout(()=>{
            sample3.textContent = "Three";
            sample3.style.color = "blue";
        },1000);
    },1000);
},1000);