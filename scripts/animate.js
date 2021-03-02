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
