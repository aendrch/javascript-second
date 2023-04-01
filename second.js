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

// 4. Validador de correo electrónico

function validateEmail(email) {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regex.test(email);
}

console.log(validateEmail('example@mail.com')); // true
console.log(validateEmail('example@mail.')); // false

// 5. Contador de palabras en un texto

function wordCount(text) {
  return text.trim().split(/\s+/).length;
}

console.log(wordCount('This is a sample text.')); // 5
console.log(wordCount('   Extra   spaces   ')); // 2

// 6. Reversa de una cadena de texto

function reverseString(text) {
  return text.split('').reverse().join('');
}

console.log(reverseString('hello')); // olleh
console.log(reverseString('12345')); // 54321

// 7. Ordenar de números 

function sortNumbers(numbers) {
  return numbers.sort((a, b) => a - b);
}

console.log(sortNumbers([3, 1, 4, 2, 5])); // [1, 2, 3, 4, 5]

// 8. Comprobar si un número es primo:

function isPrime(num) {
  if (num <= 1) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}

console.log(isPrime(7)); // true
console.log(isPrime(10)); // false

// 9. Generador de contraseñas aleatorias

function generatePassword(length) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=';
  let password = '';
  for (let i = 0
