
/**
 * Impure, because it will return different values each time.
 */
const getRandomLetter = () => {
  const min = "A".charCodeAt(0);
  const max = "Z".charCodeAt(0);

  return String.fromCharCode(
    Math.floor(Math.random() * (1 + max - min)) + min
  );
}

/**
 * Impure because it uses another impure function.
 */
const getRandomFileName = (fileExtension: string) => {
  const NAME_LENGTH = 12;
  let namePart = new Array(NAME_LENGTH);
  for(let i = 0; i < NAME_LENGTH; i++) {
    namePart[i] = getRandomLetter();
  }
  return namePart.join('') + fileExtension;
}