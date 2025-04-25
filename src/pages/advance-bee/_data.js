import advanceWords from "../../data/advance-words";

export const getGameWords = (count = 10) =>
  advanceWords.sort(() => 0.5 - Math.random()).slice(0, count);
