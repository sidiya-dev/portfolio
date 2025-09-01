'use strict';
const $navbarContainer = document.querySelector('#nav-container');
const $navTogglerBtn = document.querySelector('#nav-toggler-btn');

$navTogglerBtn.addEventListener('click', () => {
    $navbarContainer.classList.toggle('active');
    $navTogglerBtn.classList.toggle('active')
});

window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
        $navbarContainer.classList.remove('active');
        $navTogglerBtn.classList.remove('active');
    }
})