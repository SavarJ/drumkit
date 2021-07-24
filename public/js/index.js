const soundFiles = new Map();
addSoundFiles();
addEventListenersToDrums();
addEventListenersToThemeButtons();

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
function addEventListenersToDrums() {
  const drumButtons = document.querySelectorAll("button.drum");
  for (let i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", handleClick);
  }
  document.addEventListener("keypress", handleKey);
}

function handleClick() {
  const buttonInnerHTML = this.innerHTML;
  playSoundAndAnimate(buttonInnerHTML);
}

function handleKey(event) {
  playSoundAndAnimate(event.key.toLowerCase());
}

function playSoundAndAnimate(key) {
  const button = document.querySelector("button." + key);
  if (soundFiles.has(key)) {
    new Audio(soundFiles.get(key)).play();
    button.classList.toggle("pressed");
    setTimeout(function () {
      button.classList.toggle("pressed");
    }, 250);
  }
}

function addEventListenersToThemeButtons() {
  const dark = document.querySelector(".btn-dark");
  const light = document.querySelector(".btn-light");

  dark.addEventListener("click", function () {
    addStyleSheet("dark");
  });
  light.addEventListener("click", function () {
    addStyleSheet("light");
  });
}

function addStyleSheet(name) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = "public/css/" + name + ".css";
  link.id = "other-theme";
  document.getElementById("other-name")?.remove();
  document.head.appendChild(link);
}
