// Dark theme

const darkInput = document.querySelector("input#checkbox");
darkInput.addEventListener("change", () => {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");
});

// Navbar menu

const menuButton = document.querySelector(".menuButton");
menuButton.addEventListener("click", () => {
  document.querySelector(".menuAside").classList.toggle("open")
  document.body.classList.toggle("shadowed");
})

const closeButton = document.querySelector(".closeButton");
closeButton.addEventListener("click", () => {
  document.querySelector(".menuAside").classList.remove("open")
  document.body.classList.remove("shadowed");
})