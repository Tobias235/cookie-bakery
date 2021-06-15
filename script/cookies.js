let incrementButton = document.querySelectorAll(".inc");
let decrementButton = document.querySelectorAll(".dec");

//increment button
for (let i = 0; i < incrementButton.length; i++) {
  let button = incrementButton[i];
  button.addEventListener("click", (e) => {
    let buttonClicked = e.target;
    // console.log(buttonClicked);
    let input = buttonClicked.parentElement.children[1].children[0];
    // console.log(input);
    //set newValue to be input.value + 1
    let newValue = parseInt(input.value) + 1;
    // console.log(newValue);
    //set input.value to newValue
    input.value = newValue;
  });
}

//decrement button
for (let i = 0; i < decrementButton.length; i++) {
  let button = decrementButton[i];
  button.addEventListener("click", (e) => {
    let buttonClicked = e.target;
    // console.log(buttonClicked);
    let input = buttonClicked.parentElement.children[1].children[0];
    // console.log(input);
    let newValue = parseInt(input.value) - 1;
    // console.log(newValue);
    //conditional to check if newValue is greater than or equal to 0
    if (newValue >= 1) {
      input.value = newValue;
    } else {
      //if less than 0, set it to 0
      input.value = 1;
    }
  });
}

// ADD TO CART FUNCTIONALITY
const addToCartButtons = document.querySelectorAll(".addToCartBtn");
//Get data from localstorage if there is anything inside
const products = JSON.parse(localStorage.getItem("items")) || [];

//iterate through the add to cart buttons and adds eventlistener to listen on click on each button
for (var i = 0; i < addToCartButtons.length; i++) {
  let button = addToCartButtons[i];
  button.addEventListener("click", setItems);
}

//Checks which button is clicked and takes the data of title, price, size and image of current button parent elements.
function setItems(e) {
  let button = e.target;
  let productContainer = button.parentElement;
  // console.log(productContainer);
  const title = productContainer.querySelectorAll(".productTitle")[0].innerText;
  // console.log(title);
  const price = productContainer.querySelectorAll(".productPrice")[0].innerText;
  // console.log(price);
  const quantity = productContainer.querySelectorAll(".cookieAmount")[0].value;
  // console.log(size);
  const image = productContainer.querySelectorAll(".productPic")[0].src;
  // console.log(image);

  //Make a product object which equals to button clicked data.
  const product = {
    title: title,
    price: Number(price),
    quantity: Number(quantity),
    image: image,
  };

  //getting localstorage data (if any) and using json parse to convert it to a string
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  //if cart is not equal to null set currentProduct to product.title
  //if cartItems with name of product equals to undefined
  //make object cartItems and get the current items in cart and add the new one.
  if (cartItems != null) {
    let currentProduct = product.title;

    if (cartItems[currentProduct] == undefined) {
      cartItems = {
        ...cartItems,
        [currentProduct]: product,
      };
    }
  } else {
    cartItems = {
      [product.title]: product,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
