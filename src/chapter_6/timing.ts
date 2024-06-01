import {changeSign} from './logger'

const myPut = (text: string, name: string, args: any, tStart: number, tEnd: number) => console.log(`${name} - ${args} - ${text} ${tEnd - tStart} ms`);

const myGet = () => performance.now();

export const addingTime = (fn: (...args: any[]) => any, getTime = myGet, output = myPut) => (...args: any[]) => {
  let tStart = getTime();

  try {
    const valueToReturn = fn(...args);
    output('normal exity', fn.name, args, tStart, getTime());
    return valueToReturn;
  } catch (error: any) {
    output("exception thrown", fn.name, args, tStart, getTime());
    throw error;
  }
}

function subtract2(a: number, b: number) {
  try {
    if(b === 0) {
      throw 'Can not subtract from 0'
    }
    b = changeSign(b);
    return a + b
  } catch(err) {
    throw err;
  }
}

// addingTime(subtract2)(4, 1) // success
// addingTime(subtract2)(4, 0) // error