const summary = document.querySelector('.orderSummaryMedia');



let cartItems = localStorage.getItem("productsInCart");
cartItems = JSON.parse(cartItems);

let cart = localStorage.getItem("totalCost");
cart = parseInt(cart);

console.log([cartItems]);
console.log(cart);

let productContainer = document.querySelector(".orderSummaryRight");
let mobileContainer = document.querySelector(".orderSummaryMedia");

let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
if (viewportWidth > 1199) {
	if (cartItems && productContainer) {
        productContainer.innerHTML = "";
        Object.values(cartItems).map((item) => {
          productContainer.innerHTML += `
            <div class="orderSummary">
              <div class="orderLeft">
                <img src="${item.image}" class="summaryPic" alt="productPicture"/>
                <p class="summaryText">${item.title}</p>
              </div>
              <div class="orderRight">
                <p class="summaryPrice">₱${item.price}</p>
              </div>
            </div>
            <div class="orderSummaryBorder"></div>
            `
        });
      } 
    
      productContainer.innerHTML += `
              <div class="orderSummaryColumn">
              <div class="orderLeftColumn">
                <p>Subtotal</p>
                <p>Shipping</p>
              </div>
              <div class="orderRight">
                <p class="summaryPrice">₱${cart}</p>
                <p class="summaryPrice">Calculated at next step</p>
              </div>
            </div>
            <div class="orderSummaryBorder"></div>
    
            <div class="orderSummary">
              <div class="orderLeft">
                <p class="summaryTotal">Total</p>
              </div>
              <div class="orderRight">
                <p class="summaryPrice">₱${cart}</p>
              </div>
            </div>`;
}

mobileContainer.innerHTML += `
<div class="mediaSummaryCenter">
<div class="showOrder">
  <i class="orderIcon fas fa-shopping-cart"></i>
  <p class="orderSummaryTitle">Show order summary</p>
  <i class="orderIcon"></i>
</div>
<div class="orderRight">
  <p class="summaryPrice">₱${cart}</p>
</div>
</div>
<div class="mediaSummaryTop">
<div class="mediaSummaryLeft">
  <p class="textLeft">Subtotal</p>
  <p class="textLeft">Shipping</p>
</div>
<div class="mediaSummaryRight">
  <p class="textRight">₱${cart}</p>
  <p class="textRight">Calculated at next step</p>
</div>
<div class="totalPrice">
  <div class="mediaSummaryLeft">
    <p class="textLeft">Total</p>
  </div>
    <div class="mediaSummaryRight">
    <p class="textRight">₱${cart}</p>
  </div>
</div>
</div>
`;


function mobileSummary() {
    const cartSummary = document.querySelector('.mediaSummaryTop');
    const orderTitle = document.querySelector('.orderSummaryTitle');
    const orderIcon = document.querySelector('.orderIcon');
    cartSummary.classList.toggle('mediaShow');
    if(cartSummary.classList.contains('mediaShow')) {
        orderTitle.innerHTML = 'Hide Order Summary';
    } else {
        orderTitle.innerHTML = 'Show Order Summary';
    }
}

summary.addEventListener('click', mobileSummary)
