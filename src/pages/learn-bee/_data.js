import spellingWords from "../../data/spelling-words";

const allEnglishWords = Object.values(spellingWords).flatMap((level) =>
  level.map((item) => item.english)
);

export const getPaginatedResponse = () => {
  // const paginatedWords = allEnglishWords.slice(
  //   (currentPage - 1) * itemsPerPage,
  //   currentPage * itemsPerPage
  // );
  return allEnglishWords.sort();
};
