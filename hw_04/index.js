let a = prompt("wot you wont use: add, sub, mult, or div?");
let b = +prompt("enter the first number");
let c = +prompt("enter the second number");

let result;

if(a==="add"){
    result = `${b}+${c}=${b+c}`
};
if(a==="sub"){
    result = `${b}-${c}=${b-c}`
};
if(a==="mult"){
    result = `${b}*${c}=${b*c}`
};
if(a==="div"){
    result = `${b}/${c}=${b/c}`
};

alert(result)

console.log(result)

