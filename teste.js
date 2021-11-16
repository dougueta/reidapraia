/* eslint-disable no-array-constructor */
const players = [
  "frota",
  "cabeça",
  "nene",
  "tio phill",
  "kiko",
  "edinho",
  "jãozinho",
  "danilo",
  "véio",
  "rudnaldo",
  "marcão",
];

// const teste = (number) => {
//   if (number % 2) {
//     console.log("foiii", number);
//   } else {
//     console.log("deu ruim");
//   }
// };
// teste(2);
const rafflePair = (players) => players.sort(() => Math.random() - 0.5);
