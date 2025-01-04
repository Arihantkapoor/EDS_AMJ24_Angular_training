function outerfunc(fn,ln){
    function innerfunc(){
        var age = 23;
        console.log(fn,ln);
    }
    console.log(age);
    return innerfunc;
}


const a = outerfunc("faraz","ahmed");

a();