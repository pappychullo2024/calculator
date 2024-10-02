'use strict';
//selecting elements
const result = document.getElementById('result');

function display(val) {
  result.value += val;
  // result.value = result.value + val;
}

function solve() {
  //   result.value = eval(result.value);
  //we have to use 'try' and 'catch' to get error
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = 'Error';
  }
}

function clearScreen() {
  result.value = '';
}

function percentage() {
  result.value = result.value / 100;
}

function half() {
  result.value = result.value * 0.5;
}
