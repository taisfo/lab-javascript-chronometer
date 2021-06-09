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

function printTime() {}

function printMinutes() {
  chronometer.computeTwoDigitNumbers(chronometer.getMinutes);
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const li = document.createElement('li');
  li.innerText = split;
  this.split.appendChild();
}

function clearSplits() {
  splits.innerHTML = '';
}

function setStopBtn() {
  btnLeftElement.innerText === 'STOP';
  btnLeftElement.className === 'btn stop';
}

function setSplitBtn() {
  btnRightElement.innerText === 'SPLIT';
  btnRightElement.className === 'btn split';
}

function setStartBtn() {
  btnLeftElement.innerText === 'START';
  btnLeftElement.className === 'btn start';
}

function setResetBtn() {
  btnRightElement.innerText === 'RESET';
  btnRightElement.className === 'btn reset';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerText === 'START') {
    setStopBtn();
  } else {
    setStartBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerText === 'RESET') {
    setSplitBtn();
  } else {
    setResetBtn();
  }
});
