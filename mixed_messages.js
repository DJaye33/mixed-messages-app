const makeRandom = require("./helpers");

const sentencePartOne = [
  "did you know",
  "quick fact",
  "are you aware that",
  "can you believe",
  "turns out",
];

const sentencePartTwo = ["people", "we", "humans"];

const sentencePartThree = [
  "wastes about 1 billion metric tons of food each year.",
  "are the only animals that blush",
  "lose up to 30 percent of your taste buds during flight.",
  "nostrils work one at a time.",
  "are just one of the estimated 8.7 million species on Earth.",
  "host ten times more bacteria (🦠approximately 100 trillion) in their body than their own cells!",
];

console.log(
  `${makeRandom.randomize(sentencePartOne)}, ${makeRandom.randomize(
    sentencePartTwo
  )} ${makeRandom.randomize(sentencePartThree)}`
);
