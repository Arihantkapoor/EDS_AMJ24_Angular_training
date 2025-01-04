console.log("script started");

// for(let i = 1;i<10000;i++){
//     console.log("inside loop");
// }

setTimeout(() => {
    console.log("inside setTimeout");
}, 0);

for(let i = 1;i<10000;i++){
    console.log("Inside loop");
}

console.log("script ended");
