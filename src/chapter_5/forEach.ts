import { range } from "./map";

const objCopy = (obj: Record<string, any>) => {
  const copy = Object.create(Object.getPrototypeOf(obj));
  Object.getOwnPropertyNames(obj).forEach(prop => {
    Object.defineProperty(copy, prop, Object.getOwnPropertyDescriptor(obj, prop)!);
  })
  return copy;
}

const myObj = {fk: 22, st: 12, desc: "couple"};
const myObjCopy = objCopy(myObj)
// console.log(myObj === myObjCopy);
const factorial = (n: number) => {
  let result = 1;
  range(1, n + 1).forEach(v => result *= v)
  return result;
}

console.log(factorial(5))