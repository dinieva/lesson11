'use strict';

const btn = document.getElementById('btn');
const rangeIput = document.querySelector("#range");
const rangeSpan = document.getElementById('range-span');
const textInput = document.querySelector("#text");
const textSpan = document.getElementById('text-span');
const square = document.getElementById('square');
const circle = document.querySelector("#circle");
const btnInCircle = document.querySelector("#e_btn");

const spanText = function (event) {
    textSpan.textContent = event.target.value;
}

const logger = function (event) {
    rangeSpan.textContent = event.target.value;
};

const getColor = function () {
    let color = textInput.value;
    square.style.backgroundColor = color;
    textInput.value = '';
};

btn.addEventListener('click', getColor);


btnInCircle.style.display = 'none';

rangeIput.addEventListener('input', logger);
rangeIput.addEventListener('change', logger);
rangeIput.addEventListener('input', function () {
    let rangeValue = rangeIput.value;
    circle.style.width = rangeValue + '%';
    circle.style.height = rangeValue + '%';
});

textInput.addEventListener('input', spanText);