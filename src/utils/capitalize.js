export default function capitalize(word) {
  if (!word) return undefined;

  const firstLetter = word[0];
  const restOfWord = word.slice(1);

  return firstLetter.toUpperCase() + restOfWord;
}
