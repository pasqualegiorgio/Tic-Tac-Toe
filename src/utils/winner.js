// combinazioni per la vittoria
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

/**
 * Funzione che restituisce 
 * @param {Array} squares 
 */
export default function(squares) {
  // itera per tutte le posizioni di 'winningCombinations'
  for (let positions of winningCombinations) {
    // definisci l'array delle posizioni
    const [a, b, c] = positions;
    // se le posizioni coincidono restituisce il giocatore associato e le posizioni
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { player: squares[a], positions };
    }
  }
  // altrimenti non restituisce nulla
  return { player: null, positions: [] };
}