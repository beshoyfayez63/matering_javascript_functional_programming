const sum3 = (x: number, y: number, z: number) => x + y + z;

const x = {};
x.valueOf = Math.random;

const y = 10;
const z = 20;
console.log(sum3(x as number, y, z));

export {}