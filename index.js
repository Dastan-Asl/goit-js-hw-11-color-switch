const refs = {
  startButton: document.querySelector('button[data-action="start"]'),
  stopButton: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector("body"),
};

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let timerId;

const switchOn = () => {
  timerId = setInterval(() => {
    const colorIndex = randomIntegerFromInterval(0, 5);
    refs.body.style.backgroundColor = colors[colorIndex];
  }, 1000);

  refs.startButton.removeEventListener("click", switchOn);
};

const switchOff = () => {
  clearInterval(timerId);
  refs.startButton.addEventListener("click", switchOn);
};

refs.startButton.addEventListener("click", switchOn);
refs.stopButton.addEventListener("click", switchOff);
