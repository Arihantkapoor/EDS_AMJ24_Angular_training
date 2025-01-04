// function sample() {
//     // if(false){
//     //     let firstName;
//     //     console.log(firstName);
//     // }
//     // else{
//     //     console.log("firstName");
//     // }

//     let x = +prompt("Please enter the first number");
//     let y = +prompt("Please enter the second number");   

//     document.getElementById("txtRes").value = x + y;
// }


// sample();



// function sample(fn,...args){ //rest operator

//     let sum = 0;
//     for(let i in args){
//         sum += args[i];
//     }
//     console.log(sum);
// }

// var arr = [10,20,30];
// // sample("Howard",1,2,3,"abs");

// sample("Howard",...arr); //spread operator

// function sample(){
//     let arr1 = [1,2,3];
//     // let arr2 = [4,5,6]; 
//     let arr2 = ["arihant","sachin","sagar"];
//     let arr3 = [...arr1,...arr2]; //spread operator
//     console.log(arr3);
// }
// sample();

function sample(){
    // var obj1 = {name: "john", age: 30};
    // var obj2 = {name: "smith", age: 34};
    var obj1 = {name:"John"};
    var obj2 = {age: 30};
    var obj3 = {...obj1,...obj2}; //spread operator

    console.log(obj3);
}

sample();

