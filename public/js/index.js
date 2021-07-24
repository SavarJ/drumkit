let soundFiles = new Map();
addSoundFiles();
addEventListeners();

// Adding the sound files
function addSoundFiles() {
  soundFiles.set("w", "public/sounds/tom-1.mp3");
  soundFiles.set("a", "public/sounds/tom-2.mp3");
  soundFiles.set("s", "public/sounds/tom-3.mp3");
  soundFiles.set("d", "public/sounds/tom-4.mp3");
  soundFiles.set("j", "public/sounds/snare.mp3");
  soundFiles.set("k", "public/sounds/crash.mp3");
  soundFiles.set("l", "public/sounds/kick-bass.mp3");
}

// Setting the event listeneres
function addEventListeners() {
  let drumButtons = document.querySelectorAll("button.drum");
  for (let i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", handleClick);
  }
  document.addEventListener("keypress", handleKey);
}

function handleClick() {
  let buttonInnerHTML = this.innerHTML;
  playSoundAndAnimate(buttonInnerHTML);
}

function handleKey(event) {
  playSoundAndAnimate(event.key.toLowerCase());
}

function playSoundAndAnimate(key) {
  if (soundFiles.has(key)) {
    new Audio(soundFiles.get(key)).play();
    document.querySelector("button." + key).classList.toggle("pressed");
    setTimeout(function () {
      document.querySelector("button." + key).classList.toggle("pressed");
    }, 250);
  }
}
