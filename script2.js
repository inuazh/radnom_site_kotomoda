function toCatalog() {
    document.getElementById("catalog").scrollIntoView({
        behavior: 'smooth',
        block: 'start'
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

function show(){
    let modal = document.getElementById("modal");
    modal.style.visibility = "visible";
    modal.style.opacity = "1";

}
function hide(){
    let modal = document.getElementById("modal");
    modal.style.visibility = "hidden";
    modal.style.opacity = "0";
}
