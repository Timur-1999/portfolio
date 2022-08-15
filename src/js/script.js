    // Hamburger
const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', ()=>{
    menu.classList.add('active');
});

closeElem.addEventListener('click', ()=>{
    menu.classList.remove('active');
});

    // Progressbar
const infoPercent = document.querySelectorAll('.development__info-percent'),
    progressbar = document.querySelectorAll('.development__progressbar .progress');

infoPercent.forEach((item, i) =>{
    progressbar[i].style.width = item.innerHTML;
});