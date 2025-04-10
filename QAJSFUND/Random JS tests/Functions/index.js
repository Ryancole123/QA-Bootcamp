function test(arg1, ...args){
    args.forEach((args,i,Array) => args[i] * arg1)

}
debugger;
console.log(test(1,2,3,4,5));