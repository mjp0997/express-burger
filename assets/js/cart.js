const container = document.querySelector('#container');
const modal = document.querySelector('#cart');
const closeBtn = document.querySelector('#close');
const btn = document.querySelector('#btn');



// Functions

const toggleClass = () => container.classList.toggle('show');

const outsideToggle = (e) => {
   if (e.target == container) {
      toggleClass();
   }
}



// Listeners

btn.addEventListener('click', toggleClass);

container.addEventListener('click', outsideToggle);

closeBtn.addEventListener('click', toggleClass);