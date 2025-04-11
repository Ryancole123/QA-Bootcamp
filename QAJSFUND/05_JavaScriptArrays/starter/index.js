const quote = ["I", "am", "your", "friend"];

console.log(quote);


console.log(quote[2]);

quote.pop();
quote.push("father");
console.log(quote);

quote.unshift("Luke");
console.log(quote);

let errWord = "Luke";

let lukeIsHere = quote.find(i => {return i === errWord});


let lukeIsAt;

if(lukeIsHere){
    lukeIsAt = quote.findIndex(i =>
    {return i === errWord});
    quote[lukeIsAt] = "No";
}

console.log(quote);

let output = "";

for(let i = 0, j = quote.length; i < j; i++){
    if(i === j-1){
        output += quote[i] + "!";
    }else if(quote[i] === "No"){
        output += quote[i] + ", ";
    }else{
        output += quote[i] + " ";
    }
}

console.log(output);
