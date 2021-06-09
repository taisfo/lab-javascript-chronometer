const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());

  minDecElement.innerText = minutes[0];
  minUniElement.innerText = minutes[1];
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());

  secDecElement.innerText = seconds[0];
  secUniElement.innerText = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  const milliseconds = chronometer.computeTwoDigitNumber(
    chronometer.getMilliseconds()
  );

  milDecElement.innerText = milliseconds[0];
  milUniElement.innerText = milliseconds[1];
}

function printSplit() {
  const splitTime = chronometer.split();

  const li = document.createElement('li');

  li.innerText = splitTime;

  splitsElement.appendChild(li);
}

function clearSplits() {
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  chronometer.stop();
  btnLeftElement.innerText = 'START';
  btnLeftElement.classList.toggle('start');
  btnLeftElement.classList.toggle('stop');

  btnRightElement.innerText = 'RESET';
  btnRightElement.classList.toggle('reset');
  btnRightElement.classList.toggle('split');
}

function setSplitBtn() {
  printSplit();
}

function setStartBtn() {
  chronometer.start(printTime);
  btnLeftElement.innerText = 'STOP';
  btnLeftElement.classList.toggle('start');
  btnLeftElement.classList.toggle('stop');

  btnRightElement.innerText = 'SPLIT';
  btnRightElement.classList.toggle('reset');
  btnRightElement.classList.toggle('split');
}

function setResetBtn() {
  chronometer.reset();

  minDecElement.innerText = '0';
  minUniElement.innerText = '0';
  secDecElement.innerText = '0';
  secUniElement.innerText = '0';

  clearSplits();
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerText === 'START') {
    setStartBtn();
  } else {
    setStopBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerText === 'RESET') {
    setResetBtn();
  } else {
    setSplitBtn();
  }
});
