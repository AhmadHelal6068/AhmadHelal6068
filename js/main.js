const liOne = document.querySelector("li.one");
const mainText = document.querySelector(".main");
liOne.onclick=function(){
    mainText.classList.toggle("active");
    shopText.classList.remove("active");
    productText.classList.remove("active");
    pagesText.classList.remove("active");
    blogText.classList.remove("active");
    window.onscroll.classList.remove("active");
}

const liTow = document.querySelector("li.tow");
const shopText = document.querySelector(".shop");
liTow.onclick=function(){
    shopText.classList.toggle("active");
    mainText.classList.remove("active");
    productText.classList.remove("active");
    pagesText.classList.remove("active");
    blogText.classList.remove("active");
}

const liThree = document.querySelector("li.three");
const productText = document.querySelector(".product");
liThree.onclick=function(){
    productText.classList.toggle("active");
    shopText.classList.toggle("active");
    mainText.classList.remove("active");
    pagesText.classList.remove("active");
    blogText.classList.remove("active");
}

const liFour = document.querySelector("li.four");
const pagesText = document.querySelector(".pages");
liFour.onclick=function(){
    pagesText.classList.toggle("active");
    productText.classList.remove("active");
    shopText.classList.remove("active");
    mainText.classList.remove("active");
    blogText.classList.remove("active");

}

const liFive = document.querySelector("li.five");
const blogText = document.querySelector(".blog");
liFive.onclick=function(){
    blogText.classList.toggle("active");
    productText.classList.remove("active");
    shopText.classList.remove("active");
    mainText.classList.remove("active");
    pagesText.classList.remove("active");
}


const liOne2 = document.querySelector("li.one2");
const Main = document.querySelector(".main-text2.main");
liOne2.onclick=function(){
    Main.classList.toggle("active");
    Shop.classList.remove("active");
    Product.classList.remove("active");
    Pages.classList.remove("active");
    Blog.classList.remove("active");
}
const liTow2 = document.querySelector("li.tow2");
const Shop = document.querySelector(".main-text2.shop");
liTow2.onclick=function(){
    Shop.classList.toggle("active");
    Main.classList.remove("active");
    Product.classList.remove("active");
    Pages.classList.remove("active");
    Blog.classList.remove("active");
}
const liThree2 = document.querySelector("li.three2");
const Product = document.querySelector(".main-text2.product");
liThree2.onclick=function(){
    Product.classList.toggle("active");
    Shop.classList.remove("active");
    Main.classList.remove("active");
    Pages.classList.remove("active");
    Blog.classList.remove("active");
}
const liFour2 = document.querySelector("li.four2");
const Pages = document.querySelector(".main-text2.pages");
liFour2.onclick=function(){
    Pages.classList.toggle("active");
    Product.classList.remove("active");
    Shop.classList.remove("active");
    Main.classList.remove("active");
    Blog.classList.remove("active");
}
const liFive2 = document.querySelector("li.five2");
const Blog = document.querySelector(".main-text2.blog");
liFive2.onclick=function(){
    Blog.classList.toggle("active");
    Pages.classList.remove("active");
    Product.classList.remove("active");
    Shop.classList.remove("active");
    Main.classList.remove("active");
}

const removeMenu = document.querySelector(".remove-menu");
const menuUl = document.querySelector(".menu-ul");
const menuUp = document.querySelector(".menup");
removeMenu.onclick=function(){
    menuUl.classList.add("add");
    menuUl.classList.remove("active");
}
menuUp.onclick=function(){
    menuUl.classList.add("active");
    menuUl.classList.add("remove");
}


var active_up = document.querySelector(".active-up");
var active_in = document.querySelector(".active-in");
var None = document.querySelector(".none");
var None_up = document.querySelector(".none-up");
active_in.onclick=function(){
    None.classList.toggle("act");
    None_up.classList.remove("act-up");
}
active_up.onclick=function(){
    None_up.classList.toggle("act-up");
    None.classList.remove("act");
}

var Up = document.querySelector(".up");
window.onscroll = function(){
    Up.classList.add("active");
}