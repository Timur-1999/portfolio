    // Hamburger
const hamburger = document.querySelector('.hamburger'),
menu = document.querySelector('.menu'),
closeElem = document.querySelector('.menu__close'),
menuItem = document.querySelectorAll('.menu__link');

hamburger.addEventListener('click', ()=>{
    menu.classList.add('active');
});

closeElem.addEventListener('click', ()=>{
    menu.classList.remove('active');
});

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

    // Progressbar
const infoPercent = document.querySelectorAll('.development__info-percent'),
    progressbar = document.querySelectorAll('.development__progressbar .progress');

infoPercent.forEach((item, i) =>{
    progressbar[i].style.width = item.innerHTML;
});

(function(){
       // Smooth scroll and pageup
    const goTopBtn =document.querySelector(".pageup");

    window.addEventListener("scroll", trackScroll);
    goTopBtn.addEventListener('click', backToTop);

    function trackScroll() {
        var scrolled = window.pageYOffset;
        var coords = document.documentElement.clientHeight;

        if (scrolled > coords) {
        goTopBtn.classList.add('pageup-show');
        }
        if (scrolled < coords) {
        goTopBtn.classList.remove('pageup-show');
        }
    }

    function backToTop() {
        if (window.pageYOffset > 0) {
        window.scrollBy({
            top: 0,
            behavior: 'smooth'
        });
        setTimeout(backToTop, 0);
        }
    }
})();
