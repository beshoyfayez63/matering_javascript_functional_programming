// import { addingTime } from "./timing";
// const memoize = <T = any>(fn: (...args: any[]) => T) => {
//   const cache: any = {} as any;
//   return (x: any) => {
//     if(x in cache) return cache[x]
//     else {
//       cache[x] = fn(x)
//       return cache[x]
//     }
//   }
// }

// let called = 0;
// // Original fib function
let fib = (n: number): number => {
  // called += 1;
  // console.log(called);
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}


function memoize(fn: (n: number) => number): (n: number) => number {
  const cache: Record<number, number> = {}; // Use Record for type safety

  // let called = 0;
  return function (n: number): number {
    // called += 1
    // console.log('Called', called)
    if (n in cache) return cache[n];

    cache[n] = fn(n);
    return cache[n];
  };
}

fib = memoize(fib);
console.log(fib(6))

// const a = [1, 5, 3, 8, 7, 4, 6]; 
// const b = [[1, 5], [3, 8, 7, 4, 6]];
// const c = [[1, 5, 3], [8, 7, 4, 6]];
// const d = [[1, 5], 3, [8, 7, 4, 6]];
// console.log(String(a)) // 1,5,3,8,7,4,6
// console.log(String(b)) // 1,5,3,8,7,4,6
// console.log(String(c)) // 1,5,3,8,7,4,6
// console.log(String(d)) // 1,5,3,8,7,4,6

// const f = {a: "fk"};
// console.log(String(f)) //[object Object]

// with more than one function: here we ignore all other function, only cache first one
const memoize2 = (fn: any) => {
  if (fn.length === 1) {
  let cache: any = {};
  return (x: any) => (x in cache ? cache[x] : (cache[x] = fn(x)));
  } else {
  return fn;
  }
};

const memoize3 = (fn: (...args: any) => any) => {
  const cache: Record<string, any> = {};
  const PRIMITIVES = ['number', 'string', 'boolean'];

  /**
   * const _fn = (...args: any) => console.log(args, args.length, args[0]);
   * _fn({name: 'asd'}) result: args => [{name: 'asd'}] ... length => 1 ... args[0] => {name: 'asd'}
   * _fn('5','4'); result: args => ['5', '4'] ... length => 2 ... args[0] => '5'
   * _fn([5,4]); result: args => [[5,4]] ... length => 1 ... args[0] => [5,4].
   */
  return (...args: any[]) => {
    let str = args.length === 1 && PRIMITIVES.includes(typeof args[0]) ? args[0] : JSON.stringify(args);
    return str in cache ? cache[str] : (cache[str] = fn(...args));
  }
}