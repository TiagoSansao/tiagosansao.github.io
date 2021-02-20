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