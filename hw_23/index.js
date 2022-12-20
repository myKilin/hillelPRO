// У папці `img` є зображення.
// При кожному завантаженні сторінки повинно виводитися випадково обране зображення.

const arrDogs = ['dog1.jpeg', 'dog2.jpeg', 'dog3.jpeg', 'dog4.jpeg', 'dog5.jpeg', 'dog6.jpeg'];
const image = document.getElementById('image');
let randomImg = arrDogs[Math.floor(Math.random() * arrDogs.length)];
image.src = `./img/${randomImg}`
image.alt = `${randomImg.replace('.jpeg', "")}`