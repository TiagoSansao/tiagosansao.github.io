// const darkState = document.querySelectorAll('.dark-state');
// let theme = localStorage.getItem('theme-ts');
// theme === null ? (theme = 'dark') : '';
// document.body.classList.add(theme);
// darkState.forEach((element) => {
//   element.innerHTML =
//     theme === 'dark'
//       ? "<span class='on'>ON</span>"
//       : "<span class='off'>OFF</span>";
// });

// const darkInput = document.querySelectorAll('.checkbox');
// [...darkInput].map((element) => {
//   element.addEventListener('change', () => {
//     document.body.classList.toggle('light');
//     let isDark = document.body.classList.toggle('dark');
//     darkState.forEach((element) => {
//       element.innerHTML = isDark
//         ? "<span class='on'>ON</span>"
//         : "<span class='off'>OFF</span>";
//     });
//     localStorage.setItem('theme-ts', isDark ? 'dark' : 'light');
//   });
// });

// // //

const songs = [];
for (let i = 1; i <= 3; i += 1) {
  songs.push(new Audio('./assets/songs/' + i + '.mp3'));
  songs[i - 1].volume = 0.3;
  songs[i - 1].addEventListener('ended', () => {
    if (songController.currentSong === songs.length - 1) {
      songController.restart();
      songController.currentSong = 1;
      console.log('deu restart');
    } else {
      songController.currentSong += 1;
    }
  });
}

const songController = {
  playing: false,
  currentSong: 0,
  play() {
    songs[this.currentSong].play();
    this.playing = true;
  },
  pause() {
    songs[this.currentSong].pause();
    this.playing = false;
  },
  restart() {
    songs.forEach((song) => (song.currentTime = 0));
  },
};

const darkInput = document.querySelectorAll('.checkbox');
[...darkInput].map((element) => {
  element.addEventListener('change', (e) => {
    if (e.target.checked) {
      songController.play();
    } else {
      songController.pause();
    }
    update();
  });
});

function update() {
  const darkState = document.querySelectorAll('.dark-state');
  const state = songController.playing;
  darkState.forEach((element) => {
    element.innerHTML =
      state === true
        ? "<span class='on'>ON</span>"
        : "<span class='off'>OFF</span>";
  });
}

update();
