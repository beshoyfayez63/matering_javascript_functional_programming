const arr1 = [22, 9, 60, 12, 4, 56];

const sum = (x: number, y: number) => {
  // console.log(`${x}+${y}=${x + y}`);
  // console.log('------------------')
  return x + y;
}

const mySum = arr1.reduce(sum);

export const average = (arr: number[]) => arr.reduce(sum) / arr.length;
// console.log(average(arr1));

const average2 = (sum: number, val: number, index: number, arr: number[]) => {
  sum += val;
  return index === arr.length - 1 ? sum / arr.length : sum;
}

// console.log(arr1.reduce(average2, 0))

const average3 = (arr: number[]) => {
  const sumCount = arr.reduce((accum, value) => {
    return {sum: value + accum.sum, count: accum.count + 1}
  }, {sum: 0, count: 0})

  return sumCount.sum / sumCount.count;
}

// console.log(average3(arr1));

const average4 = (arr: number[]) => {
  const sumCount = arr.reduce((accum, value) => [accum[0] + value, accum[1] + 1], [0,0])
  return sumCount[0] / sumCount[1];
}

// average4(arr1);

const reverseStr = (str: string) => str.split('').reduceRight((prev, current) => prev + current);
// console.log(reverseStr("OEDIVETNOM")); // MONTEVIDEO

const t = (str: string) => str.split('').reduce((x,y) => y + x);
// console.log(t('OEDIVETNOM'))

// export {}