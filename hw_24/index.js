// Пишемо свій слайдер зображень.
// На сторінці є зображення та кнопки Next, Prev з боків від зображення.
// При кліку на Next - показуємо наступне зображення.
// При кліку на Prev - попереднє.
// При досягненні останнього зображення - ховати кнопку Next. Аналогічно з першим зображенням і кнопкою Prev.
const arrDogs = ['dog1.jpeg', 'dog2.jpeg', 'dog3.jpeg', 'dog4.jpeg', 'dog5.jpeg', 'dog6.jpeg'];

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

const image = document.getElementById('image');

function slider() {
    prev.setAttribute('disabled', "")
    let count = 0;
    let elArrDogs;
    function right () {
        count ++
        elArrDogs = arrDogs[count];
        image.src = `./img/${elArrDogs}`
        image.alt = `${elArrDogs.replace('.jpeg', "")}`
    
        if(count === arrDogs.length-1) {
            next.setAttribute('disabled', "")
        }
        prev.removeAttribute('disabled')
    }
    function left () {
        count--
    
        elArrDogs = arrDogs[count];
        image.src = `./img/${elArrDogs}`;
        image.alt = `${elArrDogs.replace('.jpeg', "")}`;
        
        if(count === 0) {
            prev.setAttribute('disabled', "")
        }
        next.removeAttribute('disabled');
    }
    prev.addEventListener('click', left)
    next.addEventListener('click', right)
}
slider()