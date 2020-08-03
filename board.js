const boardModule = (() => {
  let gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const fullBoard = (array) => {
    const truth = array.every((element) => typeof element === 'string');
    if (truth) {
      return true;
    }
  };

  const resetGame = () => {
    let count = 1;
    gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    document.querySelectorAll('.block').forEach((item) => {
      item.innerHTML = count;
      count += 1;
    });
  };

  const playTurn = (block, player) => {
    gameBoard[block - 1] = player.mark;
    for (let count = 0; count < winCondition.length; count += 1) {
      if (
        winCondition[count].every((index) => gameBoard[index] === player.mark)
      ) {
        return `${player.name} win!`;
      }
    }
    if (fullBoard(gameBoard)) {
      return 'draw';
    }
    return true;
  };

  return {
    playTurn,
    resetGame,
  };
})();
