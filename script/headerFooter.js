const template = document.createElement('template');
template.innerHTML = `
<nav>
<div class="container">
  <div class="navLinks">
    <a href="home.html" class="btn homeBtns">HOME</a>
    <a href="about.html" class="btn aboutBtns">ABOUT</a>
    <a href="contact.html" class="btn contactBtns">CONTACT</a>

    <div class="backgroundLogo"></div>
    <div class="logo">
      <object data="../pictures/svgLogo.svg" id="logo" class="homeBtns" type="image/svg+xml"></object>
    </div>
    <li class="dropdown">
      <a href="javascript:void(0)" class="dropbtn">Products</a>
      <div class="dropdown-content">
        <a href="cakes.html" class="cakesBtns" href="#">CAKES</a>
        <a href="cookies.html" class="cookiesBtns" href="#">COOKIES</a>
      </div>
    </li>
    <a id="searchBtn" class="btn">SEARCH</a>
    <a href="cart.html" id="cartBtn" class="btn">CART</a>
  </div>
</div>
</nav>

<!-- HAMBURGER  -->
<section class="p-menu1">
<div class="cartIcon">
 <a href="cart.html" class="cartLink"><i class="mobileCart fas fa-shopping-cart fa-lg"></i></a>
</div>
<nav id="navbar" class="navigation" role="navigation">
  <input id="toggle1" type="checkbox" />
  <label class="hamburger1" for="toggle1">
      <div class="top"></div>
      <div class="meat"></div>
      <div class="bottom"></div>
  </label>

  <nav class="menu1">
      <a href="home.html"class="link1 homeBtns">HOME</a>
      <a href="about.html" class="link1 aboutBtns">ABOUT</a>
      <a href="contact.html" class="link1 contactBtns">CONTACT</a>
      <a href="cakes.html" class="link1 cakesBtns">CAKES</a>
      <a href="cookies.html" class="link1 cookiesBtns">COOKIES</a>
  </nav>
</nav>
<div class="logo">
  <object data="../pictures/svgLogo.svg" id="logo" type="image/svg+xml"></object>
</div>
</section>

<footer class="footer">
   <a href="https://www.vecteezy.com/free-vector/logo">Logo by Vecteezy</a>
</footer>
`

document.body.appendChild(template.content);