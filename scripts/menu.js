const menuButton = document.querySelector('.menuButton');
menuButton.addEventListener('click', () => {
  document.querySelector('.menuAside').classList.toggle('open');
  document.body.classList.toggle('shadowed');
});

const closeButton = document.querySelector('.closeButton');
closeButton.addEventListener('click', () => {
  document.querySelector('.menuAside').classList.remove('open');
  document.body.classList.remove('shadowed');
});

window.addEventListener('pointerdown', (event) => {
  if (
    !event.target.matches('.menuButton') &&
    !event.target.matches('.project') &&
    !event.target.matches('.project-data-el')
  ) {
    document.querySelector('.menuAside').classList.remove('open');
    document.querySelector('#project-data').style.display = 'none';
    document.body.classList.remove('shadowed');
  }
});
