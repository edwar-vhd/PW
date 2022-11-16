const nav_email = document.querySelector('.nav-email');
const desktop_menu = document.querySelector('.desktop-menu');

const menuHamb = document.querySelector('.menu');
const mobile_menu = document.querySelector('.mobile-menu');

const nav_cart = document.querySelector('.nav-cart');
const product_container = document.querySelector('.product-container');

const cards_container = document.querySelector('.cards-container');

/*Boton flecha atras del menú del carrito*/
const btn_aside_back = document.querySelector('.title-container img');

const productDetail = document.querySelector('.productDetail');
const closeProductDetail = document.querySelector('.close');

const aside = document.querySelector('aside');
const main = document.querySelector('main');


const products = [];

products.push({
    name:'Producto-01',
    price:120.00,
    image:'https://images.pexels.com/photos/6797632/pexels-photo-6797632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
products.push({
    name:'Producto-01',
    price:120.00,
    image:'https://images.pexels.com/photos/6797632/pexels-photo-6797632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
products.push({
    name:'Producto-01',
    price:120.00,
    image:'https://images.pexels.com/photos/6797632/pexels-photo-6797632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
products.push({
    name:'Producto-01',
    price:120.00,
    image:'https://images.pexels.com/photos/6797632/pexels-photo-6797632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
products.push({
    name:'Producto-01',
    price:120.00,
    image:'https://images.pexels.com/photos/6797632/pexels-photo-6797632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
products.push({
    name:'Producto-01',
    price:120.00,
    image:'https://images.pexels.com/photos/6797632/pexels-photo-6797632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

function addProducts(arr){
    for(product of arr){
        const product_card = document.createElement('div');
        product_card.classList.add('product-card');

        const img = document.createElement('img');
        img.setAttribute('src',product.image);
        img.addEventListener('click', openAside);

        const product_inf = document.createElement('div');
        product_inf.classList.add('product-inf');

        const product_inf_div = document.createElement('div');

        const product_price = document.createElement('p');
        product_price.innerText = '$' + product.price;

        const product_name = document.createElement('p');
        product_name.innerText = product.name;

        const product_inf_figure = document.createElement('figure');
        const product_img_cart = document.createElement('img');
        product_img_cart.setAttribute('src', './icons/bt_add_to_cart.svg');

        /*Se agrega la maquetación al HTML*/

        product_inf_figure.appendChild(product_img_cart);

        product_inf_div.appendChild(product_price);
        product_inf_div.appendChild(product_name);

        product_inf.appendChild(product_inf_div);
        product_inf.appendChild(product_inf_figure);

        product_card.appendChild(img);
        product_card.appendChild(product_inf);

        cards_container.appendChild(product_card);
    }
}

addProducts(products);

nav_email.addEventListener('click', show_hide);
menuHamb.addEventListener('click',toogleMenuHamb);

nav_cart.addEventListener('click',toogleCart);
btn_aside_back.addEventListener('click',toogleCart);

closeProductDetail.addEventListener('click',closeAside);

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
        if(!productDetail.classList.contains('inactive')){
            closeAside();
        }
        product_container.classList.toggle('inactive');
    }
}

function openAside(){
    productDetail.classList.remove('inactive');
    main.style.gridTemplateColumns = "auto 360px";

    if(!product_container.classList.contains('inactive')){
        product_container.classList.toggle('inactive');
    }
}

function closeAside(){
    productDetail.classList.add('inactive');
    main.style.gridTemplateColumns = "auto 0px";
}

// Detectar scroll automaticamente
window.onscroll = function (e) {
    if (window.scrollY <= 61){
        aside.style.height = (window.innerHeight-60+window.scrollY)+"px";
        aside.style.top = (61-window.scrollY)+"px";

        productDetail.style.height = (window.innerHeight-60+window.scrollY)+"px";
        productDetail.style.top = (61-window.scrollY)+"px";
    } else {
        aside.style.height = (window.innerHeight)+"px";
        aside.style.top = "0px";

        productDetail.style.height = (window.innerHeight)+"px";
        productDetail.style.top = "0px";
    }
};