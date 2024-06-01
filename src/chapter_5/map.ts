import { average } from "./reduce";

const markers = [
  {name: "AR", lat: -34.6, lon: -58.4},
  {name: "BO", lat: -16.5, lon: -68.1},
  {name: "BR", lat: -15.8, lon: -47.9},
  {name: "CL", lat: -33.4, lon: -70.7},
  {name: "CO", lat: 4.6, lon: -74.0},
  {name: "EC", lat: -0.3, lon: -78.6},
  {name: "PE", lat: -12.0, lon: -77.0},
  {name: "PY", lat: -25.2, lon: -57.5},
  {name: "UY", lat: -34.9, lon: -56.2},
  {name: "VE", lat: 10.5, lon: -66.9},
];

let averageLat = average(markers.map(x => x.lat));
let averageLon = average(markers.map(x => x.lon));
// console.log(averageLat)

// console.log(["123.45", "67.8", "90"].map(parseFloat));
// [123.45, 67.8, 90]

// the problem here because parseInt can recieve 2 arguments string, and radix .. here in map index pass item and index as radix which not
// supported so it gives NaN results.
// console.log(["123.45", "-67.8", "90"].map(parseInt));
// [123, NaN, NaN]

["123.45", "-67.8", "90"].map(x => parseFloat(x));
// [123.45, -67.8, 90]
["123.45", "-67.8", "90"].map(x => parseInt(x));
// [123, -67, 90]

export const range = (start: number, stop: number) => new Array<number>(stop - start).fill(0).map((_, i) => start + i);
// console.log(range(2, 7)); // [2, 3, 4, 5, 6]

const factorial = (n: number) => range(1, n + 1).reduce((x, y) => x * y, 1);

// console.log(factorial(5));
// console.log(factorial(3));

const alphabet = range('A'.charCodeAt(0), 'Z'.charCodeAt(0) + 1).map(x => String.fromCharCode(x))
// console.log(alphabet)

const myMap = <T, U = T>(arr: T[], fn: (item: T) => U) => arr.reduce<U[]>((x, y) => x.concat(fn(y)), []);

const myArray = [22, 9, 60, 12, 4, 56];
const dup = (x: number) => 2 * x;
// console.log(myMap(myArray, dup));

export {}