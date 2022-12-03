// -Дан масив з елементами різних типів. 
// Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

let arr = [1, 32, "565", "let", "string", 45, 67, 3, 1, 4, 5, 6, ];
let sum = 0;
let result;

function arrCost(arr) {
    return arr.filter((elm)=>{
       return typeof elm === "number"})
        
};
const arrNumber = arrCost(arr);
for(let i = 0; i < arrNumber.length; i++){
    sum +=arrNumber[i];
    
};

result = sum/arrNumber.length
console.log(result);