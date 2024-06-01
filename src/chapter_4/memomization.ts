/**
 * Pure function, but we can enhance it with memomization.
 */
const fib = (n: number): number => {
  if(n <= 1) return n;
  if(n < 0) throw new Error('Error');

  return fib(n - 1) + fib(n - 2);
}

// console.log(fib(40));

const cache: number[] = [];
const fib2 = (n: number): number => {
  // debugger;
  
  if(n <= 1) {
    cache[n] = n;
    return cache[n];
  }

  if(cache[n]) return cache[n];

  cache[n] = fib2(n - 1) + fib2(n - 2);
  return cache[n];
}

// console.log(fib2(100))
// console.log(cache)
export {}