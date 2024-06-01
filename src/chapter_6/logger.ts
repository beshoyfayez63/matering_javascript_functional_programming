// Logging
// function someFunction(param1: any, param2: any, param3: any) {
//   // do something
//   // do something else
//   // and a bit more,
//   // and finally
//   return 5;
// }

function someFunction(param1: any, param2: any, param3: any) {
  console.log("entering someFunction: ", param1, param2, param3);
  // do something
  // do something else
  // and a bit more,
  // and finally
  const auxValue = 5;
  console.log("exiting someFunction: ", auxValue);
  return auxValue;
}

const addLogging = (fn: (...args: any) => any) => (...args: any) => {
  console.log(`entering ${fn.name}: ${args}`);
  try {
    const valueToReturn = fn(...args);
    console.log(`exiting ${fn.name}: ${valueToReturn}`);
    return valueToReturn;
  } catch(error) {
    console.log(`exiting ${fn.name}: threw ${error}`);
    throw error;
  }
}

export const changeSign = (n: number) => -n;

export function subtract(a: number, b: number) {
  b = changeSign(b);
  return a + b;
}

const subtract2 = addLogging(subtract)(5, 5);

const addLogging3 = (fn: (...args: any[]) => any, logger = console.log) => (...args: any[]) => {
  logger(`entering ${fn.name}: ${args}`);
  try {
    const valueToReturn = fn(...args);
    logger(`exiting ${fn.name}: ${valueToReturn}`);
    return valueToReturn;
    } catch (thrownError) {
    logger(`exiting ${fn.name}: threw ${thrownError}`);
    throw thrownError;
    }
}