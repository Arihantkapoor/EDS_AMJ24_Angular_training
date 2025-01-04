
// function gettwonumbersAndAdd(num1,num2,callback){
//     console.log(num1,num2);
//     callback(num1,num2);
// }


// function addNumbers(num1,num2){
//     console.log(num1+num2);
// }

// function multiply(num1,num2){
//     console.log(num1*num2);
// }
// gettwonumbersAndAdd(10,20,addNumbers);

// gettwonumbersAndAdd(10,20,multiply);


function gettwonumbers(num1,num2,onSuccess,onFail){
    if(typeof num1=="number" && typeof num2=="number"){
        onSuccess(num1,num2);
    }
    else{
        onFail();
    }
}

// function addNumbers(num1,num2){
//     console.log(num1+num2);
// }
// function onFail(){
//     console.log("Wrong data type");
// }

gettwonumbers(10,20,(num1,num2)=>{
    console.log(num1+num2);
},()=>{
    console.log("Wrong data type");
});



