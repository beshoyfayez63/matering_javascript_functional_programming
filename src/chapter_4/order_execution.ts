let mult = 1;

/**
 * Impure function.
 */
const f = (x: number) => {
  mult = -mult;
  return x * mult;
}

console.log(f(2) + f(5)); // 3
console.log(f(5) + f(2)); // -3

export {}