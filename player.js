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
const rafflePair = (players) => {
  const raffle = players.sort(() => Math.random() - 0.5);
  console.log(raffle);
  let pair = new Array();

  const total = raffle.reduce((anterior, atual) => {
    console.log(atual);
  });
};

console.log(rafflePair(players));
