// -Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". 
//Вихідний рядок та символи для видалення задає користувач

let iString = prompt("enter the string");
let iSymbol;
let arrSymbol = [];
let i = 0;
do {
    iSymbol = prompt("enter the letters you want to delete");
    arrSymbol.push(iSymbol);
    i++
}while(iSymbol !==null);

function doCost(string, elem) {
    let sArr = [...string];
    return sArr.filter(item => !elem.includes(item)).join('');
}
alert(doCost(iString, arrSymbol));
