const nav_email = document.querySelector('.nav-email');
const desktop_menu = document.querySelector('.desktop-menu');
const menuHamb = document.querySelector('.menu');
const mobile_menu = document.querySelector('.mobile-menu');

nav_email.addEventListener('click', show_hide);
menuHamb.addEventListener('click',toogleMenuHamb);

function show_hide(){
    desktop_menu.classList.toggle('inactive');
}

function toogleMenuHamb(){
    mobile_menu.classList.toggle('inactive');
    mobile_menu.classList.toogle('mobile-menu');
}