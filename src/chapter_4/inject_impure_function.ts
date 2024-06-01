
/**
 * Pure function, because `randomLetterFunc` is now injected into this function
 */
const getRandomFileName2 = (fileExtension = '', randomLetterFunc: () => string) => {
  const NAME_LENGTH = 12;
  const namePart = new Array<string>(NAME_LENGTH);
  for(let i = 0; i < NAME_LENGTH; i ++) {
    namePart[i] = randomLetterFunc();
  }
  return namePart.join() + fileExtension
}

const getRandomLetter = (getRandomInt = Math.random) => {
  const min = "A".charCodeAt(0);
  const max = "B".charCodeAt(0);
  return String.fromCharCode(
    Math.floor(getRandomInt() * (1 + max - min)) + min
  )
}
export {}