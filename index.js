let hamburgerBtn = document.getElementById("hamburger-menu");
let closeBtn = document.getElementById("close-btn");
let cartBtn = document.getElementById("cart");
let plusBtn = document.getElementById("add")
let subtract = document.getElementById("subtract")
let addCart = document.getElementById("add-cart");
let checkoutBtn = document.getElementById("checkout");
let nextBtn = document.querySelector(".prod")

let navlist = document.querySelector(".nav-list");
let cartContent = document.querySelector(".cart-content");
let quantity = document.getElementById("quantity");
let productName = document.getElementById("product-name");
let  price = document.getElementById("price");
let cartItem = document.querySelector(".cart-content__item");
let cartStatus = document.getElementById("cart-status")
let cartAmount = document.querySelector(".orange");


hamburgerBtn.addEventListener("click",()=>{
    navlist.classList.remove("hidden");
    
})
closeBtn.addEventListener('click', ()=>{
    navlist.classList.add("hidden")
    const mediaQuery = window.matchMedia('(min-width:768px)');
    mediaQuery.addEventListener("change",(e)=>{
     if(e.matches){
         navlist.classList.remove("hidden")
     }else{
       return
     }
    })
})

cartBtn.addEventListener('click',()=>{
    cartContent.classList.toggle("hidden");
})

plusBtn.addEventListener('click',()=>{
    quantity.textContent++;
})
subtract.addEventListener('click',()=>{
   if(quantity.textContent === "0"){
    return
   }else{
    quantity.textContent --;
   }
})

$(addCart).click(()=>{
    let cartQuantity = quantity.textContent;
    if(quantity.textContent >0){
        checkoutBtn.classList.remove("hidden")
        cartStatus.classList.add("hidden")
        cartAmount.classList.remove("hidden");
        cartAmount.textContent = cartQuantity;
        let itemInCart =`
    <div class="product">
            <img src="./images/image-product-1-thumbnail.jpg" alt="">
          </div>
          <div class="item-description">
            <p class="item-name">${productName.textContent}</p>
            <p class="item-quantity">
              <span class="cart-price">
                ${price.textContent}
              </span>
              
              <span class="cart-quantity">
               x<span class="inner-quantity"> ${cartQuantity}</span>
              </span>
              <span class="cart-total">
                $${Number(price.textContent) * Number(cartQuantity)}
              </span>
            </p>
          </div>
          <button class="delete">
            <img src="./images/icon-delete.svg" alt="delete">
          </button>

    `
    cartItem.innerHTML = itemInCart
    let innerQuantity = document.querySelector(".inner-quantity")
    let deleteBtn = document.querySelector(".delete");
    let cartTotal = document.querySelector(".cart-total");

    $(deleteBtn).click(()=>{
      if(cartAmount.textContent>0 && innerQuantity.textContent >0){
        cartAmount.textContent --;
        innerQuantity.textContent --;
        cartTotal.textContent = `$${Number(innerQuantity.textContent) *Number(price.textContent)}`;
      }
    })
    }
    
    else{
        return
    }
    
})

/*
when we click the add button we wanna fetch the h1 ,
the price of the item ,the quantity and calculate the tot price 
*/