// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.




const array = [1, 2, 3, 4, 5, 6, 7];
function removeElement(arr,elem){
    return arr.filter((item) => item !== elem)
}
console.log(removeElement(array, 5));

