// hw_17

// Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад: sum(3) = 3 sum(5) = 8 sum(20) = 28

function calc(n) {
    return function(num){
    return n += num
    }
}
const sum = calc(1);

console.log(sum(12)); 
console.log(sum(15)); 
console.log(sum(20)); 
console.log(sum(35)); 
