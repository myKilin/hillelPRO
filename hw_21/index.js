// Є текстове поле на сторінці. Під час фокусування на цьому полі збоку з'являється <div>. При пропажі фокусу - <div> так само пропадає

const ghost = document.querySelector('.ghost');
const input = document.querySelector('.input');
ghost.style.visibility = 'visible';
const showElement = () => {
    ghost.style.visibility = 'visible';
}
const hideElement = () => {
    ghost.style.visibility = 'hidden';
}
input.addEventListener('focus', showElement)
input.addEventListener('blur', hideElement)