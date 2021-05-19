// INDEX PAGE FUNCTIONALITY
const slides = document.querySelectorAll(".slide");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

// SLIDER AUTO PLAY
let i = 0;

//adds class of showing to slides when the code iterates through the images and removes when the 5 second timer is gone
function slideAuto() {
  slides[i].classList = "slide";
  i = (i + 1) % slides.length;
  slides[i].classList = "slide showing";
  startTimer();
}

//setting timer for image carousel to autoplay every 5 seconds
let interval;
function startTimer() {
  clearInterval(interval);
  interval = setInterval(slideAuto, 5000);
}
slideAuto();

// SLIDER BUTTONS
// Adds class of showing to picture when it iterates through and shows the image. Removes and add to next picture on click.
//resets the autoplay timer to 5 seconds
function slideClick(n) {
  slides[i].classList = "slide";
  i = (n + slides.length) % slides.length;
  slides[i].classList = "slide showing";
  startTimer();
}

//Conditional if rightside button is clicked
function handleNext() {
  if (next) {
    slideClick(i + 1);
  }
}

//Conditional if leftside button is clicked
function handlePrev() {
  if (prev) {
    slideClick(i - 1);
  }
}

prev.addEventListener("click", handlePrev);
next.addEventListener("click", handleNext);
