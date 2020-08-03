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
    console.log('game restart');
  };
  const playTurn = (block, player) => {
    gameBoard[block - 1] = player.mark;
    console.log(winCondition[1]);
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

const Player = (name, mark = 'X') => ({ name, mark });

let playerOne;
let playerTwo;
let turn = 1;

const getMove = () => {
  const idx = window.event.currentTarget.id;

  const sel = document.getElementById(`${idx}`);
  if (turn == 1) {
    setMark(sel, idx, playerOne);
    turn = 2;
  } else if (turn == 2) {
    setMark(sel, idx, playerTwo);
    turn = 1;
  }
};

const setMark = (sel, idx, player) => {
  if (sel.innerHTML !== playerOne.mark && sel.innerHTML !== playerTwo.mark) {
    sel.innerHTML = player.mark;
    const status = boardModule.playTurn(idx, player);
    if (status != true) {
      alert(status);
    }
  }
};

document.querySelectorAll('.block').forEach((item) => {
  item.addEventListener('click', getMove);
});

const displayBoard = (event) => {
  document.querySelector('#board').classList.remove('hide');
};

document.querySelector('#start').addEventListener('click', (event) => {
  displayBoard();
  const playerOneName = document.querySelector('#player_1').value;
  const playerTwoName = document.querySelector('#player_2').value;
  playerOne = Player(playerOneName, 'X');
  playerTwo = Player(playerTwoName, 'O');
  event.preventDefault();
});

document
  .querySelector('#restart')
  .addEventListener('click', () => {
    turn = 1;
    boardModule.resetGame();
  });
