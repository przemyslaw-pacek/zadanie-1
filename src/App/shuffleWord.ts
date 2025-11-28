export const shuffleWord = (word: string) => {
  if (word.length < 4) return word;

  const first = word[0];
  const last = word[word.length - 1];
  const middle = word.slice(1, -1).split("");

  for (let i = middle.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [middle[i], middle[j]] = [middle[j], middle[i]];
  }

  return `${first}${middle.join("")}${last}`;
};
