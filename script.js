let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector ('.header__menu');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('_active');
    menu.classList.toggle('_active');
});
