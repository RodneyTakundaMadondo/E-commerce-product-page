let hamburgerBtn = document.getElementById("hamburger-menu");
let closeBtn = document.getElementById("close-btn");
let cartBtn = document.getElementById("cart");
let plusBtn = document.getElementById("add")
let subtract = document.getElementById("subtract")
let addCart = document.getElementById("add-cart");
let checkoutBtn = document.getElementById("checkout");



let navlist = document.querySelector(".nav-list");
let cartContent = document.querySelector(".cart-content");
let quantity = document.getElementById("quantity");
let productName = document.getElementById("product-name");
let price = document.getElementById("price");
let cartItem = document.querySelector(".cart-content__item");
let cartStatus = document.getElementById("cart-status")
let cartAmount = document.querySelector(".orange");
let focusImg = document.querySelector(".alt-img-focus");
let productImgContainer = document.querySelector(".product-image")
let altImgs = productImgContainer.querySelectorAll(".alt-img");
let popUpImgContainer = document.querySelector(".img-in-focus");//this the image we see after clicking one of the tiny images
let popUpAltImgs = focusImg.querySelectorAll(".alt-img");
let popUpPrevBtn = focusImg.querySelector(".previous");
let popUpNextBtn = focusImg.querySelector(".next");
let mainImgContainer = $(".main-img");
let mainImg = $("#main-item");
let popUpMainImg =$("#popup");

altImgs.forEach((altImg) => {
  altImg.addEventListener("click", () => {
    let img = altImg.querySelector("#alt-view").src.replace("-thumbnail", "");//looking for this specific id in this container and then getting the src, then remove the part of that src that we dont want
    mainImg.attr("src",`${img}`) 
 
    altImgs.forEach((button)=>{
      if(button!== altImg){
        button.classList.remove("custom")
      }
      altImg.classList.add("custom")
    })
  })
})

popUpAltImgs.forEach((popUpAltImg) => {
  popUpAltImg.addEventListener("click", () => {
    let img = popUpAltImg.querySelector("#alt-view").src.replace("-thumbnail", "");
    popUpMainImg.attr("src", `${img}`)

    popUpAltImgs.forEach((button)=>{
      if(button!==popUpAltImg){
        button.classList.remove("custom");
      }
      popUpAltImg.classList.add("custom")
    })
  })
})

function addPopUp(){
  $(".main-img").off("click");
  if(window.innerWidth>=992){
    $(".main-img").click(()=>{
      let img = mainImgContainer.children("#main-item").attr("src")
        $("#popup").attr("src", `${img}`)
      $(focusImg).toggleClass("hidden");
      $(".overlay").toggleClass("hidden");
    })
  }else return;
}
addPopUp();
window.addEventListener("resize",addPopUp);


$(".close__btn").click(() => {
  $(".overlay").addClass("hidden");
  $(focusImg).addClass("hidden")
})


$(hamburgerBtn).click(() => {
  navlist.classList.remove("hidden");
})
function updateNavList() {
  if (window.innerWidth >= 768) {
    navlist.classList.remove("hidden")
  } else {
    navlist.classList.add("hidden")
  }
}
updateNavList();
window.addEventListener("resize", updateNavList)

$(closeBtn).click(() => {
  navlist.classList.add("hidden")
})

cartBtn.addEventListener('click', () => {
  cartContent.classList.toggle("hidden");
})

plusBtn.addEventListener('click', () => {
  quantity.textContent++;
})

subtract.addEventListener('click', () => {
  if (Number(quantity.textContent) === 0) {
    return
  } else {
    quantity.textContent--;
  }
})
let img = document.querySelector("#main-item");
let imgNum = 1;
$(".product-image__previous").click(() => {
  /*we can get the image and manipulate the src of it
  when it is less than 1 go back to 4 and loop that way */
  imgNum--;
  if (imgNum <= 0) {
    imgNum = 4;
  }
  manipulateImg(imgNum)
})
$(".product-image__next").click(() => {
  imgNum++;
  if (imgNum > 4) {
    imgNum = 1;
  }
  manipulateImg(imgNum);

})

function manipulateImg(number) {
  let imgsrc = `./images/image-product-${number}.jpg`;
  img.src = imgsrc;
}
let imgpop = $('#popup');
$(popUpPrevBtn).click(() => {

  let initsrc = imgpop.attr("src");

  /*i get the index of the number and i take that value and 
  keeping that value in mind i update the whole string to have what 
  i want specifically the number part */
  let dot = initsrc.lastIndexOf(".");
  let dash = initsrc.lastIndexOf("-");
  let imgNum = initsrc.slice(dash + 1, dot);

  imgNum--;
  if (imgNum <= 0) {
    imgNum = 4;
  }
  imgpop.attr("src", `./images/image-product-${imgNum}.jpg`);

  popUpAltImgs.forEach((popUpAltImg) => {
   
    let img = popUpAltImg.querySelector("#alt-view");
    img =img.getAttribute("src").replace("-thumbnail", "");
  
    if(imgpop.attr("src")===img){
      console.log(true);
      popUpAltImg.classList.add("custom")
    }else {popUpAltImg.classList.remove("custom")}
    
    
  })
})

$(popUpNextBtn).click(() => {

  let initsrc = imgpop.attr("src");
  let dot = initsrc.lastIndexOf(".");
  let dash = initsrc.lastIndexOf("-");
  let imgNum = initsrc.slice(dash + 1, dot);

  imgNum++;
  if (imgNum > 4) {
    imgNum = 1;
  }
  imgpop.attr("src", `./images/image-product-${imgNum}.jpg`);
  popUpAltImgs.forEach((popUpAltImg) => {
   
    let img = popUpAltImg.querySelector("#alt-view");
    img =img.getAttribute("src").replace("-thumbnail", "");
  
    if(imgpop.attr("src")===img){
      console.log(true);
      popUpAltImg.classList.add("custom")
    }else {popUpAltImg.classList.remove("custom")}
    
    
  })
})


$(addCart).click(() => {
  let cartQuantity = quantity.textContent;
  if (quantity.textContent > 0) {
    checkoutBtn.classList.remove("hidden")
    cartStatus.classList.add("hidden")
    cartAmount.classList.remove("hidden");
    cartAmount.textContent = cartQuantity;
    let itemInCart = `
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

    $(deleteBtn).click(() => {
      if (cartAmount.textContent > 0 && innerQuantity.textContent > 0) {
        cartAmount.textContent--;
        innerQuantity.textContent--;
        cartTotal.textContent = `$${parseFloat(innerQuantity.textContent) * parseFloat(price.textContent)}`;
        if(innerQuantity.textContent ==0){
         $(cartItem).html(`
          <div id="cart-status" class="isempty ">
              <p>Your cart is empty.</p>
            </div>
          `)
          $(cartAmount).addClass("hidden")
          $(checkoutBtn).addClass("hidden")
        }
      }
    })
  }

  else {
    return
  }

})

