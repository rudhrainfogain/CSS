//Element selctors
const backdrop = document.querySelector('.backdrop') as HTMLDivElement;
const selectPlanButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll(
  '.plan button'
);
const modal = document.querySelector('.modal') as HTMLDivElement;
const noButtonModal = document.querySelector(
  '.modal__action--negative'
) as HTMLButtonElement;
const toggleButton = document.querySelector(
  '.toggle-button'
) as HTMLButtonElement;
const mobileNav = document.querySelector('.mobile-nav') as HTMLElement;

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
for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', openModal);
}

//Add event listener to no button on Modal
if (noButtonModal) {
  noButtonModal.addEventListener('click', closeModal);
}

//Add event listener to backdrop
backdrop.addEventListener('click', () => {
  /*  mobileNav.style.display = 'none'; */
  mobileNav.classList.remove('open');
  closeModal();
});

//Add event listener to hamburger
toggleButton.addEventListener('click', displaySideNav);
