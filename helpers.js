module.exports = {
  randomize(sentencePart) {
    return sentencePart[Math.floor(Math.random() * sentencePart.length)];
  },
};
