// gfi-live-check: tiny sample module used by the live check.
function greet(name) {
  if (!name) {
    return "Hello, world!";
  }
  return `Hello, ${name}!`;
}

function sum(values) {
  let total = 0;
  for (const value of values) {
    total += value;
  }
  return total;
}

function average(values) {
  if (values.length === 0) {
    return 0;
  }
  return sum(values) / values.length;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

module.exports = { greet, sum, average, clamp };
