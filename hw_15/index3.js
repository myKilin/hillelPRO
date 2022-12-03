// .-Написати функцію заповнення даними користувача двомірного масиву. 
//  Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

function doSamphing() {
    let result;
    let elemOne;
    let elemTwo;
    let arrOne = [];
    let arrTwo = [];
    let i = 0;
    let a = 0;
    do {
        elemOne = prompt('enter the value of the main array element');
        if(elemOne === null) break
        arrOne.push(elemOne);
        i++
        if(elemOne==='++'){
        do{
            arrTwo = [];
            elemTwo = prompt('enter the value of the secondary array element');
            if(elemTwo === null) break
            arrTwo.push(elemTwo);
            a++
        }while(elemTwo !== null)
            arrOne.push(arrTwo)}
            result = arrOne.filter(elem => elem !=="++")
        } while (elemOne !== null)
    return result
};


console.log(doSamphing());