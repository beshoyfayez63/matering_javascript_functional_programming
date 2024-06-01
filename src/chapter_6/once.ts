
const once = (fn: (...args: any[]) => any) => {
  let done = false;
  let result: any = undefined
  return (...args: any[]) => {
    if(!done) {
      done = true;
      result = fn(...args);
    }
    return result;
  }
}

const onceAndAfter = (fn: Function, g: Function) => {
  let toCall = fn;
  return (...args: any[]) => {
    let result = toCall(...args);
    toCall = g;
    return result;
  }
}

const sum = (a: number, b: number) => a + b;

const subtract = (a: number, b: number) =>  a - b;

// const res = once(sum);
// console.log(res(1, 2))
const res = onceAndAfter(sum, subtract);

export {}

// console.log(res(5, 5))
// console.log(res(5, 5))
// console.log(res(5, 5))
