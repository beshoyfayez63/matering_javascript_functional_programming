const not = (fn: (...args: any[]) => boolean) => (...args: any[])=> !fn(...args);

const numbers = [1,2,3,4,5,6,7,8,9, 10];
const numsMoreThan5 = (n: number) => n > 5
// console.log(numbers.filter(not(numsMoreThan5)))

const filterNot = (arr: any[]) => (fn: (...args: any[]) => boolean) => arr.filter(not(fn));

// sort
const invert = (fn: (...args: any[]) => number) => (...args: any[]) => -fn(...args);

const nums = [6,5,4,3,2,1];
nums.sort(invert((a, b) => {
  if(a > b) return -1;
  else {
    return 1;
  }
}))
console.log(nums)

const chars = ['A', 'D', 'C', 'B', 'E'];

chars.sort(invert((a, b) => {
  // console.log('a',a)
  // console.log('b',b)
  // console.log(b.localeCompare(a))
  // console.log('....')
  return a.localeCompare(b)
}))


console.log(chars)


// const spanishComparison = (a: string, b: string) => a.localeCompare(b, "es");
// const palabras = ["ñandú", "oasis", "mano", "natural", "mítico", "musical"];
// console.log(palabras.sort(spanishComparison))