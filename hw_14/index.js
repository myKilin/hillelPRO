//hw_14

// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const randindex = (min,max) => (Math.floor(Math.random() * (max - min) + min));
function generateKey(length, symbols) {
    const result = [];
    for (i=0; i<length; i++) {
        result.push(symbols[randindex(0, symbols.length)])
    }
    return result.join("")
}

const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i