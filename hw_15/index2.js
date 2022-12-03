// -Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. 
// У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
//Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

function doMath(x, znak, y) {
   if (znak === "+"){
    return x+y
   }
   if (znak === "-"){
    return x-y
   }
   if (znak === "*"){
    return x*y
   }
   if (znak === "/"){
    return x/y
   }
   if (znak === "%"){
    return x%y
   }
   if (znak === "^"){
    return x^y
   }
}

const inputData1 = +prompt("x"); 
const inputData2 = +prompt("y"); 
const inputData3 = prompt("znak"); 
alert(doMath(inputData1,inputData3,inputData2));