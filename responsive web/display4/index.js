const cartBtn = document.querySelector('.side-menu img:nth-child(1)');
const sliderCart = document.querySelector('.cart');
const closeBtnCart = document.querySelector('.checkbtn-close');

const cekBtn = document.querySelectorAll('.check-item img');

const closebtnModal = document.querySelector('.modal-content .modal-checkout button:nth-child(3)'); 
const modalBox = document.querySelector('.modal-box');
const modalShowBtn = document.querySelector('.main-counting-cart .main-btn-cart button:nth-child(1)');

const closeAddItem = document.querySelector('.add-item-form .btn-add-item button:nth-child(1)');
const addItemModal = document.querySelector('.add-item-modal');
const btnAddSideMenu = document.querySelector('.side-menu img:nth-child(4)');

cartBtn.addEventListener('click', function() {
    sliderCart.classList.toggle('slider-cart');
})

closeBtnCart.addEventListener('click', function() {
    sliderCart.classList.toggle('slider-cart');
})


cekBtn.forEach(e => e.addEventListener('click', function(e){
    e.target.parentElement.classList.toggle('check-item-on');
    e.target.classList.toggle('check-click-on');
}))

closebtnModal.addEventListener('click', function() {
    modalBox.classList.toggle('modal-btn-click');
})

modalShowBtn.addEventListener('click', function() {
    modalBox.classList.toggle('modal-btn-click')
})

closeAddItem.addEventListener('click', function(e) {
    addItemModal.classList.toggle('add-item-close-btn');
    e.preventDefault();

})
btnAddSideMenu.addEventListener('click', function() {
    addItemModal.classList.toggle('add-item-close-btn');
})