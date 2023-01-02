const barsButton = document.querySelector('.fa-bars');
const markButton = document.querySelector('.fa-xmark');

barsButton.addEventListener('click', () => {
    const navbarEl = document.querySelector('.navbar');
    navbarEl.classList.toggle('is-shown');
});

markButton.addEventListener('click', () => {
    const navbarEl = document.querySelector('.navbar');
    navbarEl.classList.remove('is-shown');
});