import spellingWords from "../../data/spelling-words";

export const getGameWords = (dificulty = "easy", count = 10) =>
  spellingWords[dificulty].sort(() => 0.5 - Math.random()).slice(0, count);
