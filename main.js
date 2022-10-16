const nav_email = document.querySelector('.nav-email');
const desktop_menu = document.querySelector('.desktop-menu ');

nav_email.addEventListener('click', show_hide);

function show_hide(){
    desktop_menu.classList.toggle('inactive');
}