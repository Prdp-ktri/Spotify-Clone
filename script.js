const songs = [
  {
    name: "Don't Panic",
    file: "./audio/Dont-Panic.mp3",
  },
  {
    name: "Everything's Not Lost",
    file: "./audio/Everythings-Not-Lost.mp3",
  },
  {
    name: "High Speed",
    file: "./audio/High-Speed.mp3",
  },
  {
    name: "Parachutes",
    file: "./audio/Parachutes.mp3",
  },
  {
    name: "Shiver",
    file: "./audio/Shiver.mp3",
  },
  {
    name: "Sparks",
    file: "./audio/Sparks.mp3",
  },
  {
    name: "Viva La Vida",
    file: "./audio/VivaLaVida.mp3",
  },
  {
    name: "We Never Change",
    file: "./audio/We-Never-Change.mp3",
  },
  {
    name: "Yellow",
    file: "./audio/Yellow.mp3",
  },
];

let currentSongIndex = 0;
let audio = new Audio(songs[currentSongIndex].file);

// Elements
const playBtn = document.querySelector(".player-control-icon:nth-child(3)");
const progressBar = document.querySelector(".progress-bar");
const volumeBar = document.querySelector(".volume-bar");

// ▶️ Play / Pause
let isPlaying = false;

playBtn.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    playBtn.src = "./assets/player_icon3.png"; // play icon
  } else {
    audio.play();
    playBtn.src = "./assets/pause_icon.png"; // you can add pause icon
  }
  isPlaying = !isPlaying;
});

// ⏩ Next
document
  .querySelector(".player-control-icon:nth-child(5) .next-btn")
  .addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong();
  });

// ⏪ Previous
document
  .querySelector(".player-control-icon:nth-child(1) .prev-btn")
  .addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong();
  });

// 🎵 Play selected song
function playSong() {
  audio.pause();
  audio = new Audio(songs[currentSongIndex].file);
  audio.play();
  isPlaying = true;
  playBtn.src = "./assets/pause_icon.png";

  audio.addEventListener("timeupdate", () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress || 0;
  });
}

// 🎯 Seek
progressBar.addEventListener("input", () => {
  audio.currentTime = (progressBar.value / 100) * audio.duration;
});

// 🔊 Volume
volumeBar.addEventListener("input", () => {
  audio.volume = volumeBar.value / 100;
});
