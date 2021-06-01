const summary = document.querySelector('.mediaSummaryCenter');
const cartSummary = document.querySelector('.mediaSummaryTop');
const orderTitle = document.querySelector('.orderSummaryTitle');
const orderIcon = document.querySelector('.orderIcon');


summary.addEventListener('click', () => {
    if(cartSummary.style.display === 'none') {
        cartSummary.style.display = 'block';
        orderTitle.innerHTML = 'Hide Order Summary'
        orderIcon.classList.remove('fa-angle-down');
        orderIcon.classList.add('fa-angle-up');
    } else {
        cartSummary.style.display = 'none';
        orderTitle.innerHTML = 'Show Order Summary'
        orderIcon.classList.remove('fa-angle-up');
        orderIcon.classList.add('fa-angle-down');
    }
});