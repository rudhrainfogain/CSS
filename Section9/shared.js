"use strict";
//Element selctors
var backdrop = document.querySelector('.backdrop');
var selectPlanButtons = document.querySelectorAll('.plan button');
var modal = document.querySelector('.modal');
var noButtonModal = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
/*Function to open Modal and display backdrop
 */
function openModal() {
    /*   modal.style.display = 'block';
    backdrop.style.display = 'block'; */
    modal.classList.add('open');
    backdrop.classList.add('open');
}
/*Function to close Modal and hide backdrop
 */
function closeModal() {
    /*  modal.style.display = 'none';
    backdrop.style.display = 'none'; */
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
}
/*Function to display sideNav and backdrop
 */
function displaySideNav() {
    /* mobileNav.style.display = 'block';
    backdrop.style.display = 'block'; */
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
}
//Add event listener to the  select plan buttons
for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', openModal);
}
//Add event listener to no button on Modal
if (noButtonModal) {
    noButtonModal.addEventListener('click', closeModal);
}
//Add event listener to backdrop
backdrop.addEventListener('click', function () {
    /*  mobileNav.style.display = 'none'; */
    mobileNav.classList.remove('open');
    closeModal();
});
//Add event listener to hamburger
toggleButton.addEventListener('click', displaySideNav);
