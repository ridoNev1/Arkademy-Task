const cartBtn = document.querySelector('.side-menu img:nth-child(1)');
const sliderCart = document.querySelector('.cart');
const closeBtnCart = document.querySelector('.checkbtn-close');

cartBtn.addEventListener('click', function() {
    sliderCart.classList.toggle('slider-cart');
})

closeBtnCart.addEventListener('click', function() {
    sliderCart.classList.toggle('slider-cart');
})