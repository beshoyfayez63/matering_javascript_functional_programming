const unary = (fn: (...args: any[]) => any) => (...args: any[]) => fn(args[0]);

console.log(["123.45", "-67.8", "90"].map((n) => parseInt(n)));
console.log(["123.45", "-67.8", "90"].map(unary(parseInt)));

const arity = (fn: (...args: any[]) => any, start = 0, end?: number) => (...args: any[]) => fn(...args.slice(start, end));

