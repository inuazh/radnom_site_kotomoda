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


let basket = [];



let sw = document.getElementById("sw");

for (product of products) {
    let figure = createElement("figure", { "class": "card swiper-slide" });
    let img = createElement("img", { "class": "card-picture", "src": product.img });
    let figcaption = createElement("figcaption");
    let h3 = createElement("h3", { "class": "regular-text fix-height" }, product.name);
    let p1 = createElement("p", { "class": "fix-height" }, product.desc);
    let p2 = createElement("p", {}, product.price + "руб./шт.");
    let button = createElement("button", { "class": "btn regular-text" }, "Добавить");
    let element = structuredClone(product);
    button.onclick = function() {
        basket.push(element);
    }
    addChild(figcaption, [h3, p1, p2, button]);
    addChild(figure, [img, figcaption]);
    addChild(sw, [figure]);
}


function generateBody() {
    // removeChild
    let table = document.getElementById("table");
    if (document.getElementById("tbody-basket")) {
        table.removeChild("tbody-basket");
    }

    let tbody = createElement("tbody", { "id": "tbody-basket" });
    for (element of basket) {
        let tr = createElement("tr");
        for (key in element) {
            if (key == "img") {
                let td = createElement("td");
                let img = createElement("img", {"src":element[key], "class": "sm-pic" });
                td.addChild(img);
                tr.appendChild(td);
                continue;
            }
            let td = createElement("td", {}, element[key]);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    table.appendChild(tbody);
}









const swiper = new Swiper('.swiper', {
    direction: 'horizontal', //Переключение слайдера
    loop: true,
    speed: 1000,
    slidesPerView: 3, // Количество видимых карточек на слайдере
    spaceBetween: 10, //Расстояние между карточками
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

function show() {
    let modal = document.getElementById("modal");
    modal.style.visibility = "visible";
    modal.style.opacity = "1";
    generateBody();
}

function hide() {
    let modal = document.getElementById("modal");
    modal.style.visibility = "hidden";
    modal.style.opacity = "0";
}