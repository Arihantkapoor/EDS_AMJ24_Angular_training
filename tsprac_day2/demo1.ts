// function isEqual(num1:any, num2: any){
//     return num1 === num2;
// }

// console.log(isEqual(1, "1"));

function isEqual<T>(num1: T, num2: T){
    return num1 === num2;
}

console.log(isEqual<number>(1, 1));
console.log(isEqual<string>("1", "1"));


console.log(isEqual<any>(1, "1"));