const currentYearEl = document.querySelector('#currentYearEl');
const year = new Date().getFullYear();
currentYearEl.innerText = new Date().getFullYear();
currentYearEl.setAttribute('datetime', `${year}-00-00`);
