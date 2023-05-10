function toProducts(){
    let products = document.getElementById("products");
    products.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


let products = [{
    img: "images/products/1.jpg",
    name: "Космос",
    desc: "Космический кот в очках с капюшоном с длинным рукавом Regular Fit",
    price: 2599
},
{
    img: "images/products/2.jpg",
    name: "Deep Blue Hoodie",
    desc: "Deep Blue Hoodie с капюшоном с длинным рукавом Regular Fit",
    price: 2599
},
{
    img: "images/products/3.jpg",
    name: "Космический котенок с пиццей",
    desc: "Космический котенок с пиццей с капюшоном с длинным рукавом Regular Fit",
    price: 2599
},
{
    img: "images/products/4.jpg",
    name: "Инь-Ян",
    desc: "Котики в формате инь-ян с капюшоном с длинным рукавом Regular Fit",
    price: 3299
},
{
    img: "images/products/5.jpg",
    name: "Торжествующий котик",
    desc: "Торжествующий котик с капюшоном с длинным рукавом Regular Fit",
    price: 2999
},
{
    img: "images/products/6.jpg",
    name: "Отдыхающий котик",
    desc: "Отдыхающий котик с капюшоном с длинным рукавом Regular Fit",
    price: 3299
},
{
    img: "images/products/7.jpg",
    name: "Недоумевающий котик",
    desc: "Недоумевающий котик с капюшоном с длинным рукавом Regular Fit",
    price: 2999
},
{
    img: "images/products/8.jpg",
    name: "Котик с бабочкой",
    desc: "Котик с бабочкой с капюшоном с длинным рукавом Regular Fit",
    price: 3299
},

];


function createElement(name, attribute = {}, inner = null) {
    let element = document.createElement(name);
    for (att in attribute) {
        element.setAttribute(att, attribute[att]);
    }
    if (inner) {
        element.innerHTML = inner;
    }
    return element;
}

function addChild(element, children) {
    for (child of children) {
        element.appendChild(child);
    }
}


//  <figure class="card">
// <img class="card-picture" src="images/none.svg" alt="">
// <figcaption>
//     <h3 class="regular-text">Краткое описание</h3>
//     <p>Подробная информация о товаре</p>
//     <p>150 ₽/шт</p>
//     <button class="btn regular-text">Добавить</button>
// </figcaption>
// </figure>
const swiper = new Swiper('.swiper', {

    direction: 'horizontal', //Переключение слайдера
    loop: true,
    speed: 1000,
    slidesPerView: 2, // Количество видимых карточек на слайдере
    spaceBetween: 10, //Расстояние между карточками
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


let sw = document.getElementById("sw");

for (product of products){
    let figure = createElement("figure", {"class": "card swiper-slide"});
    let img = createElement("img", {"class": "card-picture", "src": product.img});

    addChild(figure, [img]);

    addChild(sw, figure);
}