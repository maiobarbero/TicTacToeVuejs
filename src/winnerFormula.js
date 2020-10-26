const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [6, 4, 2],
  [0, 4, 8],
];

export default function(squares) {
  for (let positions of winningCombos) {
    const [a, b, c] = positions;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { player: squares[a], positions };
    }
  }
  return { player: null, positions: [] };
}
