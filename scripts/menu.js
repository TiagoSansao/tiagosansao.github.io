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

function reset() {
  document.querySelector('.menuAside').classList.remove('open');
  document.querySelector('#project-data').style.display = 'none';
  document.body.classList.remove('shadowed');
}

window.addEventListener("click", (event) => {
  if (event.target.matches('.menuLink')) {
    return setTimeout(() => {
      reset();
    }, 300);
  } else if (
    !event.target.matches('.menuButton') &&
    !event.target.matches('.project') &&
    !event.target.matches('.project-data-el') &&
    !event.target.matches('.social-media-icon') &&
    !event.target.matches('.darkEl') &&
    !event.target.matches('button') &&
    !event.target.matches('a')
  ) {
    reset();
  }
});
