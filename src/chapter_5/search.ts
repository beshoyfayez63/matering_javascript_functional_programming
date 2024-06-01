const markers = [
  {name: "UY", lat: -34.9, lon: -56.2},
  {name: "AR", lat: -34.6, lon: -58.4},
  {name: "BR", lat: -15.8, lon: -47.9},
  {name: "BO", lat: -16.5, lon: -68.1},
  {name: "EG", lat: 16.5, lon: 68.1}
]

let brazilData = markers.find(v => v.name === "BR");
// console.log(brazilData);

// console.log([1, 2, NaN, 4].findIndex(v => v === NaN)) NaN in javascript doesn't equal it's self NaN !== NaN
// console.log([1, 2, NaN, 4].findIndex(v => isNaN(v)));

// using reduce
const _find = (arr: any[], cb: (item: any) => boolean) => arr.reduce((x, y) => x === undefined && cb(y) ? y : x, undefined);
// console.log(_find([1,2,3,4], (item) => item < 3));

const _findIndex = (arr: any[], cb: (item: any) => boolean) => 
  arr.reduce((prev, curr, index) => prev === -1 && cb(curr) ? index : prev, -1);
// console.log(_findIndex([1,2,3,4], (item) => item > 3));

// console.log(markers.every(m => m.lat < 0 && m.lon < 0));
// console.log(markers.some(m => m.lat < 0 && m.lon < 0));
// console.log(markers.every(m => m.lat < 0 && m.lon < 0));

// every using reduce
// console.log(markers.reduce((x, y) => y.lat < 0 && y.lon < 0, true));

// some using reduce
// console.log(markers.reduce((x, y) => !x && y.lat < 0 && y.lon < 0 ? x = true : x, false));
// console.log(markers.reduce((x, y) => x || y.lat < 0 && y.lon < 0, false));

const _none = (arr: any[], cb: (item: any) => boolean) => arr.every((x) => !cb(x));