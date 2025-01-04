function myfunc(exp){
    return function(num){
        return Math.pow(num,exp);
    }
}

const a=myfunc(5);
const b=a(12);
 
console.log(b);