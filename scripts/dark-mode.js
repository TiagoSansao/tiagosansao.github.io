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