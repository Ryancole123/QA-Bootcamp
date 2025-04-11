const darthVader = {
    allegiance : "Empire",
    weapon : "lightsabre",
    sith : true
}

console.log(darthVader.allegiance);
console.log(darthVader.weapon);
console.log(darthVader.sith);
console.log(darthVader.Jedi);

console.log(Object.keys(darthVader).length);

darthVader.children = 2;
darthVader.childNames = ["Luke", "Leia"];

console.log(darthVader.children);
console.log(darthVader.childNames[0]);

for (const key in darthVader) {
    console.log(`key: ${key} value: ${darthVader[key]}`);
    
}

darthVader.allegiance = "The light side";
console.log(darthVader);

delete darthVader.children;

let{allegiance, weapon, sith, childNames} = darthVader;

console.log(darthVader);
