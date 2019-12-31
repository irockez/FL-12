function pipe (){
    let result=arguments[0];
    for (let i=1;i<arguments.length-1;i++){
        let func=arguments[i]
        result+=func(result);
    }
    return arguments.length<1 ? false:result;
}
function addOne(x){
    return x+1;
}

pipe(1, addOne);
pipe(1, addOne, addOne);