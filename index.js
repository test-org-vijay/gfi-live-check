// Live-check fixture for the gfi bot. Real JavaScript so GitHub detects the language.
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function greet(name) {
  return `Hello, ${name}!`;
}

module.exports = { add, multiply, greet };
