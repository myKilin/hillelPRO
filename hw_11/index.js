// hw_11

// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]


const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];


// 1. Знайти суму та кількість позитивних елементів.

// const arr1 = arr.filter((elem) => {
//   return elem > 0;
// });
// const sum = arr1.reduce((acc,elem)=>{
//     acc=acc+elem;
//     return acc;
// },0);

// console.log(arr1.length,sum)




// 2.Знайти мінімальний елемент масиву та його порядковий номер.

// const arr1 = [...arr].sort((a,b) =>{ 
//     return b-a;
// });

// const index = arr.findIndex((elem) => elem === arr1[arr.length-1]);
// console.log('min elm',arr[index], "index",index);




// 3. Знайти максимальний елемент масиву та його порядковий номер.

// const arr1 = [...arr].sort((a,b) =>{ 
//     return a-b;
// });

// const index = arr.findIndex ((elem) => elem === arr1 [arr.length-1])
// console.log('min elm',arr[index], "index",index);




// 4. Визначити кількість негативних елементів.

// const arr1 = arr.filter((elem) => {
//   return elem < 0;
// }).length;
// console.log(arr1);



// 5. Знайти кількість непарних позитивних елементів.

//  const resalt = arr.filter((elem) => (elem % 2 !== 0 && elem > 0)).length;
// console.log(resalt);




// 6. Знайти кількість парних позитивних елементів.

// const resalt = arr.filter((elem) => (elem % 2 === 0 && elem > 0)).length;
// console.log(resalt);



// 7. Знайти суму парних позитивних елементів.

// let sum = 0;
// const resalt = arr.forEach((elem) => {
//   if(elem % 2 === 0 && elem > 0 ){
//       sum +=elem
//   }
// });
// console.log(sum);





// 8. Знайти суму непарних позитивних елементів.

// let sum = 0;
// const resalt = arr.forEach((elem) => {
//   if(elem % 2 !== 0 && elem > 0 ){
//       sum +=elem
//   }
// });
// console.log(sum);







// 9. Знайти добуток позитивних елементів.

// let sum = 1;
// const resalt = arr.forEach((elem) => {
//   if(elem > 0 ){
//       sum *=elem
//   }
// });
// console.log(sum);





// 10. Знайти найбільший серед елементів масиву, ост альні обнулити.


// const arr1 = arr.reduce((result,elem) => { 
//    if (elem > result) {
//     return result = elem
//    }
//    return result;
// });

// for(let i=0; i<= arr.length-1; i++) {
//   if(arr[i] !== arr1) {
//     arr[i] = 0
//   }
// };
// console.log(arr1, arr);