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
        data.push(element);
    }


    addChild(figcaption, [h3, p1, p2, button]);
    addChild(figure, [img, figcaption]);
    addChild(sw, [figure]);
}



function createBasket() {
    if (document.getElementById("table-basket")) {
        document.getElementById("table").removeChild(document.getElementById("table-basket"));
    }
    let tableBasket = createElement("tbody", { "id": "table-basket" });
    let i = 0;
    for (product of data) {
        let tr = createElement("tr");
        for (key in product) {
            if (key == 'desc') {
                continue;
            } else if (key == 'img') {
                let td = createElement("td");
                let img = createElement("img", { "src": product[key], "class": "small-picture" });
                addChild(td, [img]);
                addChild(tr, [td]);
            } else {
                let td = createElement("td", {}, product[key]);
                addChild(tr, [td]);
            }

        }

        let td = createElement("td");
        let input = createElement("input", { "class": "num", "id": `td${i}`, "type": "number", "value": "1", "oninput": "allPrice()", "min": "0" });
        i++;
        addChild(td, [input]);
        addChild(tr, [td]);


        addChild(tableBasket, [tr]);
    }
    document.getElementById("table").appendChild(tableBasket);
}

function allPrice() {
    let Sum = 0;
    for (let i = 0; i < data.length; i++) {
        Sum += data[i].price * document.getElementById(`td${i}`).value;
    }
    document.getElementById("allPrice").innerHTML = Sum;
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

    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        "@2.00": {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },


});





data = [];