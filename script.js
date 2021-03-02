// Dark theme

const darkState = document.querySelectorAll('.dark-state');
let theme = localStorage.getItem('theme-ts');
theme === null ? (theme = 'dark') : '';
document.body.classList.add(theme);
darkState.forEach((element) => {
  element.innerHTML =
    theme === 'dark'
      ? "<span class='on'>ON</span>"
      : "<span class='off'>OFF</span>";
});

const darkInput = document.querySelectorAll('.checkbox');
[...darkInput].map((element) => {
  element.addEventListener('change', () => {
    document.body.classList.toggle('light');
    let isDark = document.body.classList.toggle('dark');
    darkState.forEach((element) => {
      element.innerHTML = isDark
        ? "<span class='on'>ON</span>"
        : "<span class='off'>OFF</span>";
    });
    localStorage.setItem('theme-ts', isDark ? 'dark' : 'light');
  });
});

// Navbar menu

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

window.addEventListener('click', (event) => {
  console.log(!event.target.matches('.menuButton'));
  if (
    !event.target.matches('.menuButton') &&
    !event.target.matches('.project')
  ) {
    document.querySelector('.menuAside').classList.remove('open');
    document.querySelector('#project-data').style.display = 'none';
    document.body.classList.remove('shadowed');
  }
});

// Animate when it's in viewport

const skills = document.querySelectorAll('.technology');
const navItems = document.querySelectorAll('.headerNav>a');
const menuNavItems = document.querySelectorAll('.menuAside>a');
let navSectionArr = [];

navItems.forEach((element) => {
  const navHrefElement = document.querySelector(element.getAttribute('href'));
  navSectionArr.push([navHrefElement, element]);
});

menuNavItems.forEach((element, index) => {
  navSectionArr[index].push(element);
});

let before = [-1, null];

function checkIfElementIsInViewport() {
  // Animation block

  const windowHeight = window.innerHeight;
  const scrollY = window.scrollY || window.pageYOffset;
  const scrollPosition = scrollY + windowHeight;

  skills.forEach((element) => {
    const elPosition =
      element.getBoundingClientRect().top + scrollY + element.clientHeight;
    if (scrollPosition > elPosition) {
      element.classList.add('animated');
    }
  });

  // Highlight nav block

  let highlightedNavIndex = 0;

  for (let i = 0; i < navSectionArr.length; i += 1) {
    const HighlightedNav = navSectionArr[highlightedNavIndex];
    const highlightedNavIndexDistanceFromTop =
      HighlightedNav[0].getBoundingClientRect().top +
      HighlightedNav[0].clientHeight;
    const currentSectionDistanceFromTop =
      navSectionArr[i][0].getBoundingClientRect().top +
      navSectionArr[i][0].clientHeight;
    if (
      highlightedNavIndexDistanceFromTop < 0 &&
      currentSectionDistanceFromTop > 0
    ) {
      highlightedNavIndex = i;
    }
    navSectionArr.forEach((el) => {
      el[1].classList.remove('active');
      el[2].classList.remove('active');
    });
    navSectionArr[highlightedNavIndex][1].classList.add('active');
    navSectionArr[highlightedNavIndex][2].classList.add('active');
  }
}

document.addEventListener('scroll', checkIfElementIsInViewport);
checkIfElementIsInViewport();

// Project info

const projectsArr = document.querySelectorAll('.project');
const projectDataEl = document.querySelector('#project-data');

const projectData = [
  {
    title: 'DevForum',
    about: 'A cool forum',
    techs: 'Node.js',
    showing: 'Very cool',
  },
  {
    name: '',
    about: '',
    techs: '',
    showing: '',
  },
  {
    name: '',
    about: '',
    techs: '',
    showing: '',
  },
  {
    name: '',
    about: '',
    techs: '',
    showing: '',
  },
];

function getProjectHTML({ title, about, techs, showing }) {
  return `
    <h3>${title}</h3>
    <p>${about}</p>
    <p>${techs}</p>
    <div>${showing}</div>
  `;
}

projectsArr.forEach((project, index) => {
  project.addEventListener('click', () => {
    projectDataEl.innerHTML = getProjectHTML(projectData[index]);
    document.body.classList.add('shadowed');
    projectDataEl.style.display = 'block';
  });
});
