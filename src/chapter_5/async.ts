
const fakeAPI = <T>(delay: number, value: T): Promise<T> => new Promise((resolve) => setTimeout(() => {
  resolve(value);
  console.log(value)
}, delay));

const useResult = (x: any) => console.log(new Date(), x);

// (async () => {
//   console.log("START");
//   console.log(new Date());
//   const result = await fakeAPI(3000, 200);
//   useResult(result);
//   console.log("END");
// })();

// (() => {
//   console.log("START FOREACH");
//   [1, 2, 3, 4].forEach(async n => {
//     const x = await fakeAPI(n * 3000, n);
//     useResult(x);
//   });
//   console.log("END FOREACH");
// })();

const forEachAsync = (arr: any[], fn: (...value: any) => Promise<any>) =>
  arr.reduce(
    (promise: Promise<any>, value) => {
      return promise.then(() => fn(value))
    },
    Promise.resolve()
  );

// (async () => {
//   console.log("START FOREACH VIA REDUCE");
//   await forEachAsync([1,2,3,4], async n => {
//     const x = await fakeAPI(n * 1000, n);
//     useResult(x);
//   })
//   console.log("END FOREACH VIA REDUCE");
// })()

const mapAsync = (arr: any[], fn: (value: any) => Promise<any>) => Promise.all(arr.map(fn));
// const mapAsync = (arr: any[], fn: (value: any) => Promise<any>) => Promise.all(arr.map(x => Promise.resolve(x + 1)));

// (async () => {
//   console.log("START MAP");
//   const mapped = await mapAsync([1,2,3,4], async (n) => {
//     return await fakeAPI(n * 1000, n + 1);
//   });
//   useResult(mapped)
//   console.log("END MAP");
// })();
// console.log([1,2,3,4].filter(i => i % 2 === 0))
const filterAsync = <T>(arr: T[], fn: (value: T) => Promise<boolean>) => mapAsync(arr, (v) => fn(v))
  .then(arr2 => arr.filter((_, i) => arr2[i]));

const fakeFilter = (value: number) =>
  new Promise<boolean>(resolve =>
    setTimeout(() => resolve(value % 2 === 0), 1000)
  );

// (async () => {
//   console.log("START FILTER");
//   const filtered = await filterAsync([1, 2, 3, 4, 5, 6], async (n) => {
//   const x = await fakeFilter(n);
//   return x;
//   });
//   useResult(filtered);
//   console.log("END FILTER");
//   })();

const reduceAsync = <T, U = T>(arr: T[], fn: (prev: U, value: T, index: number) => Promise<any>, init: U) => {
  // return Promise.resolve(
  //   forEachAsync(arr, async (value) => {
  //     init = await fn(init, value);
  //   }).then(_ => init)
  // );
  return Promise.resolve(init).then(async (accum) => {
    return forEachAsync(arr, async (value, i) => {
      accum = await fn(accum, value, i)
      return accum;
    })
  })
}

(async () => {
  console.log("START REDUCE");
  const result = await reduceAsync([1, 2, 3, 4], async (prev, value) => new Promise((resolve) => {
    setTimeout(() => {
      resolve(prev + value);
      console.log(prev);
    }, 1000)
  }), 0);
  useResult(result);
  console.log("END REDUCE");
})(); 