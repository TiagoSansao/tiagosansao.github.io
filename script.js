// Dark theme

const darkInput = document.querySelector("input#checkbox");
darkInput.addEventListener("change", () => {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");
});
