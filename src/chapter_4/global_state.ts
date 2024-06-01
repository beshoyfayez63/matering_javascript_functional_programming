
let limitYear = 2002;

/** Impure Function */
const isOldEnough = (birthYear: number) => birthYear <= limitYear;

console.log(isOldEnough(2003));
console.log(isOldEnough(2000));

/**
 * Impure Function, because `new Date` is part of global state.
 */
const isOldEnough2 = (birthYear: number) => birthYear <= new Date().getFullYear() - 18;

const PI = 3.14159265358979;
/**
 *  Pure Function because PI is constant
 */
const circleArea = (r: number) => PI * Math.pow(r, 2); // or PI * r ** 2

export {}