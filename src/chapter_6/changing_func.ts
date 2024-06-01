// Turning operations into functions:
const arr = [1,2,3];
const sum = arr.reduce((x, y) => x + y, 0);

const range = (start: number, stop = 0) => new Array(start - stop).fill(5).map((n, i) => n - i);

const factorial = range(5).reduce((x, y) => x * y, 1);
console.log(factorial)

// Implementing operations
const binaryOp1 = (op: string) => {
  switch (op) {
    case "+":
    return (x: number, y: number) => x + y;
    case "-":
    return (x: number, y: number) => x - y;
    case "*":
    return (x: number, y: number) => x * y;
    //
    // etc.
    //
  }
};

const binaryOp2 = (op: any) => new Function('x', 'y', `return x ${op} y`);

const _sum = binaryOp2('+')(6, 6);
console.log(_sum);

// A handier implementation
const isNegative = binaryOp2('>')(1,2);

const binaryLeftOp = (x: any, op: string) => (y: any) => binaryOp2(op)(x,y);
const binaryOpRight = (op, y: any) => (x: any) => binaryOp2(op)(x,y);
