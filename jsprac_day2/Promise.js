function Prom(success){
    return new Promise(function(resolve,reject){
        if(success){
            resolve('Success');
        }
        else{
            reject('Failure');
        }
    });
}

function onFullFill(result){
    console.log(result);
}

function onFailure(error){
    console.log(error);
}

Prom(true).then((result)=>{console.log(result)}).catch((error)=>{console.log(error)});





