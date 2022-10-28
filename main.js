const nav_email = document.querySelector('.nav-email');
const desktop_menu = document.querySelector('.desktop-menu');

const menuHamb = document.querySelector('.menu');
const mobile_menu = document.querySelector('.mobile-menu');

const nav_cart = document.querySelector('.nav-cart');
const product_container = document.querySelector('.product-container');

nav_email.addEventListener('click', show_hide);
menuHamb.addEventListener('click',toogleMenuHamb);
nav_cart.addEventListener('click',toogleCart);

function show_hide(){
    if(!desktop_menu.classList.contains('inactive')){
        desktop_menu.classList.toggle('inactive');
    }else{
        if(!product_container.classList.contains('inactive')){
            product_container.classList.toggle('inactive');
        }
        desktop_menu.classList.toggle('inactive');
    }

}

function toogleMenuHamb(){
    if(product_container.classList.contains('inactive')){
        mobile_menu.classList.toggle('inactive');
    }else{
        mobile_menu.classList.toggle('inactive');
        product_container.classList.toggle('inactive');
    }
    
}

function toogleCart(){
    if(!product_container.classList.contains('inactive')){
        product_container.classList.toggle('inactive');
    }else{
        if(!mobile_menu.classList.contains('inactive')){
            mobile_menu.classList.toggle('inactive');
        }
        if(!desktop_menu.classList.contains('inactive')){
            desktop_menu.classList.toggle('inactive');
        }
        product_container.classList.toggle('inactive');
    }
}