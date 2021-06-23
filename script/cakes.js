const addToCartButtons = document.querySelectorAll(".addToCartBtn");
const success = document.querySelector('.productSuccess');

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
  const size = productContainer.querySelectorAll(".cakeSelect")[0].value;
  // console.log(size);
  const image = productContainer.querySelectorAll(".productPic")[0].src;
  // console.log(image);

  //Make a product object which equals to button clicked data.
  const product = {
    title: title,
    price: Number(price),
    size: size,
    image: image,
  };

  //getting localstorage data (if any) and using json parse to convert it to a string
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  //Conditional to make sure they choosed a size of the cake else it will push an alert
  if (size === "0") {
    alert("Please Select Size");
  } else if (cartItems != null) {
    //a popup notifcation that the order has been added successfully and removes after 5seconds
    success.classList.add('successAdded');
    setInterval(() => {
      success.classList.remove('successAdded');
    }, 5000);
    //if cart is not equal to null set currentProduct to product.title
    let currentProduct = product.title;
    //if cartItems with name of product equals to undefined
    //make object cartItems and get the current items in cart and add the new one.
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

