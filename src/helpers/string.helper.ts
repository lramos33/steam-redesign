export function capitalizeFirstLetter(str: string) {
  const firstWord = str.split(" ")[0];
  return firstWord.charAt(0).toUpperCase() + firstWord.slice(1) + str.slice(firstWord.length);
}
