// Dark theme

const darkState = document.querySelectorAll(".dark-state");
let theme = localStorage.getItem('theme-ts');
theme === null ? theme = "dark" : "";
document.body.classList.add(theme);
darkState.forEach((element) => {
  element.innerHTML = theme === "dark" ? "<span class='on'>ON</span>" : "<span class='off'>OFF</span>";
});

const darkInput = document.querySelectorAll(".checkbox");
[...darkInput].map((element) => {
  element.addEventListener("change", () => {
    document.body.classList.toggle("light");
    let isDark = document.body.classList.toggle("dark");
    darkState.forEach((element) => {
      element.innerHTML = isDark ? "<span class='on'>ON</span>" : "<span class='off'>OFF</span>";
    });
   localStorage.setItem('theme-ts', isDark ? "dark" : "light");
  });
});

// Navbar menu

const menuButton = document.querySelector(".menuButton");
menuButton.addEventListener("click", () => {
  document.querySelector(".menuAside").classList.toggle("open")
  document.body.classList.toggle("shadowed");
});

const closeButton = document.querySelector(".closeButton");
closeButton.addEventListener("click", () => {
  document.querySelector(".menuAside").classList.remove("open");
  document.body.classList.remove("shadowed");
});

window.addEventListener("click", (event) => {
  if (!event.target.matches('.menuButton')) {
    document.querySelector(".menuAside").classList.remove("open");
    document.body.classList.remove("shadowed");
  }
});

// Animate when it's in viewport 

const skills = document.querySelectorAll(".technology");
const navItems = document.querySelectorAll(".headerNav>a")
let navSectionObj = {};
console.log(navSectionObj);

navItems.forEach((element) => {
  const navHrefElement = document.querySelector(element.getAttribute("href"));
  navSectionObj[element.textContent] = {nav: element, section: navHrefElement};
});

let before = [-1, null]

function checkIfElementIsInViewport() {
  const windowHeight = window.innerHeight;
  const scrollY = window.scrollY || window.pageYOffset;
  const scrollPosition = scrollY + windowHeight;
  let navItemsArray = ["Home", "Skills", "Projects", "Contact"]

  skills.forEach((element) => {
    const elPosition = element.getBoundingClientRect().top + scrollY  + element.clientHeight;
    if (scrollPosition > elPosition) {
      element.classList.add('animated');
    }
  });

  for (let item in navSectionObj) {
    const currentElement = navSectionObj[item];
    const currentElementId = navItemsArray.indexOf(item);
    const previousElement = navSectionObj[navItemsArray[currentElementId - 1]] || null;
    if (previousElement) {
      navSectionObj["Home"].nav.classList.remove('active');
      if (previousElement.section.getBoundingClientRect().top < 0 && currentElement.section.getBoundingClientRect().top > 0) {
        console.log(item);
        console.log(previousElement.section.getBoundingClientRect().top);
      }
    } else {
      navSectionObj["Home"].nav.classList.add('active');
    }
  }
}


document.addEventListener("scroll", checkIfElementIsInViewport);
checkIfElementIsInViewport();