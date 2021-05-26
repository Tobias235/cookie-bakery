function displayCart() {
  //get productsInCart and totalCost values and make it into string and numbers
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  let cart = localStorage.getItem("totalCost");
  cart = parseInt(cart);

  let productContainer = document.querySelector(".fullProductsContainer");

  //conditional to check so cartItems and productContainer is true
  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    //iterate through cartItems values and the HTML with values from localstorage and put it into the cart
    //conditional statement to check if item.quantity or item.size is true
    //create the HTML
    Object.values(cartItems).map((item) => {
      productContainer.innerHTML += `
                      <div class="fullContainer">
                        <div class="leftCart">
                            <div class="product">
                                <img src="${item.image}" class="cartImg" alt="productPicture">
                                <div class="cartText">
                                    <p class="productName">${item.title}</p>
                                </div>
                            </div>
                        </div>
    
                        <div class="rightCart">
                            <div class="productRight">
                                <p class="price">₱${item.price}</p>
                                <div class="cartBtn">
                                ${(() => {
                                  if (item.quantity) {
                                    return (productContainer.innerHTML = `
                                      <button class="quantityBtn dec">-</button>
                                      <label>
                                      <input type="number" class="productAmount" value="${item.quantity}">
                                      </label>
                                      <button class="quantityBtn inc">+</button>`);
                                  } else if (item.size) {
                                    return (productContainer.innerHTML = `<p class="cakeSize">${item.size}</p>`);
                                  }
                                })()}
                                    <a class="deleteBtn">Remove</a>
                                </div>
                                <div class="totalRight">
                                ${(() => {
                                  if (item.size) {
                                    return (productContainer.innerHTML = `
                                      <p class="total">₱${item.price}</p>`);
                                  } else {
                                    return (productContainer.innerHTML = `<p class="total">₱${
                                      item.quantity * item.price
                                    }</p>`);
                                  }
                                })()}
                                </div>
                            </div>
                        </div>
                    </div>`;
    });

    productContainer.innerHTML += `
                <div class="amount">
                    <h1 class="subTotal">Subtotal: ₱${cart}</h1>
                    <a class="checkoutBtn">Check Out</a>
                </div>`;

    manageQuantity();
    deleteButtons();
    checkOut();
  }
}

//function calculates the total cost of cart
function calcTotal() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productName = document.querySelectorAll(".productName");
  let subTotal = [];
  let total = 0;
  //iterate through productName array and get the productName for each item
  for (let i = 0; i < productName.length; i++) {
    let products = productName[i].innerText;
    //console.log(products);
    let price = cartItems[products].price;
    // console.log(price)
    let qty = cartItems[products].quantity;
    //console.log(qty);
    //conditional to check if it contains size or quantity
    if (cartItems[products].size) {
      total = price;
    } else {
      total = price * qty;
    }
    //puts the price of total into the array subTotal
    subTotal.push(total);
  }
  //  console.log(subTotal);
  //creating totalCart to get values put together instead of after eachother with Array.reduce.
  const totalCart = subTotal.reduce((a, b) => a + b, 0);
  localStorage.setItem("totalCost", totalCart);
  displayCart();
}

//quantity buttons to add or remove quantity of products
function manageQuantity() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  let incrementButton = document.querySelectorAll(".inc");
  let decrementButton = document.querySelectorAll(".dec");

  //Iterate through the increment buttons and add an event listener to each of them. Set buttonClicked equal button clicked
  for (let i = 0; i < incrementButton.length; i++) {
    let button = incrementButton[i];
    button.addEventListener("click", (e) => {
      let buttonClicked = e.target;
      // console.log(buttonClicked);
      let input = buttonClicked.parentElement.children[1];
      //currentProduct gets the product name
      let currentProduct =
        buttonClicked.parentElement.parentElement.parentElement.parentElement
          .children[0].children[0].children[1].children[0].innerText;
      // console.log(currentProduct);
      // console.log(input);
      //set newValue equal to input.value and add 1 for each click
      let newValue = parseInt(input.value) + 1;
      // console.log(newValue);
      input.value = newValue;
      //setting cartItems[name].quantity equal to newValue and push it to localstorage with updated quantity
      cartItems[currentProduct].quantity = newValue;
      localStorage.setItem("productsInCart", JSON.stringify(cartItems));
      displayCart();
      calcTotal();
    });
  }

  //Iterate through the decrement buttons and add an event listener to each of them. Set buttonClicked equal button clicked
  for (let i = 0; i < decrementButton.length; i++) {
    let button = decrementButton[i];
    button.addEventListener("click", (e) => {
      let buttonClicked = e.target;
      // console.log(buttonClicked);
      let input = buttonClicked.parentElement.children[1];
      //currentProduct gets the product name
      let currentProduct =
        buttonClicked.parentElement.parentElement.parentElement.parentElement
          .children[0].children[0].children[1].children[0].innerText;
      // console.log(currentProduct);
      // console.log(input);
      //set newValue equal to input.value and remove 1 for each click
      let newValue = parseInt(input.value) - 1;
      // console.log(newValue);
      //conditional to check if newValue is greater than or equal to 1 and set input.value equal to newValue
      if (newValue >= 1) {
        input.value = newValue;
        //else it will set newValue equal to 1
      } else {
        newValue = 1;
      }
      //setting cartItems[name].quantity equal to newValue and push it to localstorage with updated quantity
      cartItems[currentProduct].quantity = newValue;
      localStorage.setItem("productsInCart", JSON.stringify(cartItems));
      displayCart();
      calcTotal();
    });
  }
}

function deleteButtons() {
  let deleteButtons = document.querySelectorAll(".deleteBtn");
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productName;

  //iterate through buttons and add event listener
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", (e) => {
      //set buttonClicked to equal to the button clicked
      let buttonClicked = e.target;
      //productName equals to name of buttonclicked product name
      productName =
        buttonClicked.parentElement.parentElement.parentElement.parentElement
          .children[0].children[0].children[1].children[0].innerText;

      //deletes item in cart with the productName
      delete cartItems[productName];
      localStorage.setItem("productsInCart", JSON.stringify(cartItems));

      displayCart();
      calcTotal();
    });
  }
}

//checkout button to redirect to next page
function checkOut() {
  let checkoutBtn = document.querySelector(".checkoutBtn");
  checkoutBtn.addEventListener("click", () => {
    location.href = "custInfo.html";
  });
}

//load displayCart and calcTotal or page load
displayCart();
calcTotal();
