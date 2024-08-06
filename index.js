let hamburgerBtn = document.getElementById("hamburger-menu");
let closeBtn = document.getElementById("close-btn");
let cartBtn = document.getElementById("cart");
let plusBtn = document.getElementById("add")
let subtract = document.getElementById("subtract")
let addCart = document.getElementById("add-cart");


let navlist = document.querySelector(".nav-list");
let cartContent = document.querySelector(".cart-content");
let quantity = document.getElementById("quantity");


hamburgerBtn.addEventListener("click",()=>{
    navlist.classList.remove("hidden");
})
closeBtn.addEventListener('click', ()=>{
    navlist.classList.add("hidden")
})
cartBtn.addEventListener('click',()=>{
    cartContent.classList.toggle("hidden");
})

plusBtn.addEventListener('click',()=>{
    quantity.textContent ++
})
subtract.addEventListener('click',()=>{
   if(quantity.textContent === "0"){
    return
   }else{
    quantity.textContent --;
   }
})