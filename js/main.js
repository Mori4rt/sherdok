const btn = document.querySelector('.menu__btn');
const sidebar = document.querySelector('.sidebar');
const nav = document.querySelector('.nav');


btn.addEventListener('click', () => {
    nav.classList.toggle('menu__active');
    sidebar.classList.toggle('active'); // добавляем или удаляем класс active
});

