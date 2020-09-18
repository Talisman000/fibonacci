"use strict";
const memory = new Map();
memory.set(0, 0);
memory.set(1, 1);
function fib(n) {
  if (memory.has(n)) {
    return memory.get(n);
  }
  const value = fib(n - 1) + fib(n - 2);
  memory.set(n, value);
  return value;
}

const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(fib(i));
}
