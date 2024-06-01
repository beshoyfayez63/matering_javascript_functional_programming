const isOldEnough = (currentYear: number, birthYear: number) => birthYear <= currentYear - 18;

const roundFix = (a: number, n: number) => {
  let r = a > 0 ? Math.ceil(n) : Math.floor(n);
  a += n - r;
  return {a, r};
}

let accum = 0;
let {a, r} = roundFix(accum, 3.1415);
accum = a;
let {a: a1, r: r1} = roundFix(0.14150000000000018, 3.1415);
accum = a1;
let {a: a2, r: r2} = roundFix(0.14150000000000018, 3.1415);
// 0.14150000000000018
accum = a2;
console.log(accum, r); // 0.1415 3

export {}