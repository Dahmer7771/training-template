const HEADER = document.querySelector('.header');
const MENU = document.querySelector('.nav');
const MENU_TOGGLE = document.querySelector('.menu-toggle');
const BODY = document.querySelector('body');

MENU_TOGGLE.onclick = () => {
    MENU.classList.toggle('adaptive-nav');
};

BODY.onresize = () => {
    if(BODY.offsetWidth > 930) {
        MENU.classList.remove('adaptive-nav');
    }
};

window.onscroll = () => {
    if(BODY.offsetWidth <= 930) return;
    if(window.scrollY > 100 && BODY.offsetWidth > 930) {
        HEADER.style.height = '60px';
    } else {
        HEADER.style.height = '100px';
    }
};


