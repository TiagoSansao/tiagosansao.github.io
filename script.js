// Dark theme

let theme = localStorage.getItem('theme');
theme === null ? theme = "dark" : "";
document.body.classList.add(theme);

const darkInput = document.querySelectorAll(".checkbox");
[...darkInput].map((element) => {
  element.addEventListener("change", () => {
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");
   localStorage.setItem('theme', document.body.classList[0]);
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