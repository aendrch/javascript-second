// 1. Calculadora

function calculator(num1, num2, operator) {
  if (operator === '+') {
    return num1 + num2;
  } else if (operator === '-') {
    return num1 - num2;
  } else if (operator === '*') {
    return num1 * num2;
  } else if (operator === '/') {
    return num1 / num2;
  } else {
    return 'Invalid operator';
  }
}

// 2. Convertir grados Celsius a Fahrenheit

function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

console.log(celsiusToFahrenheit(0)); // 32
console.log(celsiusToFahrenheit(100)); // 212

// 3. Generador de números aleatorios

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomNum(1, 10)); // Random number between 1 and 10