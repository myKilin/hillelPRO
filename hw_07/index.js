let age = prompt("What year are you born?");
let born = ("");

if(age)
    {born = (`${"You're"} ${2022-age} ${"years old now ."}`)} 
    else 
        {alert("It is a pity that you did not want to enter your year of birth")};

let city = prompt("what city do you live?");
let live = ("");

if(city)
    {live = (`${"You live in"} ${city} ${"."}`)}
    else 
        {alert("It is a pity that you did not want to enter your city")};

let sport = prompt("what is your favorite sport?");
let sportType = ("");


if(sport){
    if(sport==="MMA")
        {sportType = "Cool! You wont be like Conor ?"}
    if(sport==="box")
        {sportType = "Cool! You wont be like Usik ?"}
    if(sport==="BJJ")
        {sportType = "Cool! You wont be like Gracie ?"}
}
else
    {alert("It is a pity that you did not want to enter your favorite sport") };

let result = (` ${born}\n ${live}\n ${sportType}`);
alert(result);




















