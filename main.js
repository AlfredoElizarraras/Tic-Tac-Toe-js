let gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let turnMark = 'X';
let playerOne = '';
let playerTwo = '';
const winner = false;

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

const getMove = () => {
  const idx = window.event.currentTarget.id;

  const sel = document.getElementById(`${idx}`);
  if (sel.innerHTML !== 'X' && sel.innerHTML !== 'O') {
    sel.innerHTML = turnMark;
    gameBoard[idx - 1] = turnMark;

    if (win(winCondition, gameBoard)) resetGame();
    else turnMark = turnMark === 'X' ? 'O' : 'X';
  } else {
    alert('Already taken');
  }
};

const win = (winArray, boardArray) => {
  for (let count = 0; count < winArray.length; count += 1) {
    if (winCondition[count].every((index) => gameBoard[index] === turnMark)) {
      const winner = turnMark === 'X' ? playerOne : playerTwo;
      alert(`${winner} win!`);
      return true;
    }
  }
  if (fullBoard(gameBoard)) {
    return true;
  }
};

const fullBoard = (array) => {
  const truth = array.every((element) => typeof element === 'string');
  if (truth) {
    alert('Draw');
    return true;
  }
};

const resetGame = () => {
  let count = 1;
  gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  turnMark = 'X';
  document.querySelectorAll('.block').forEach((item) => {
    item.innerHTML = count;
    count += 1;
  });
};

document.querySelectorAll('.block').forEach((item) => {
  item.addEventListener('click', getMove);
});

const displayBoard = (event) => {
  document.querySelector('#board')
    .classList.remove('hide');
};

document.querySelector('#start')
  .addEventListener('click', (event) => {
    displayBoard();
    playerOne = document.querySelector('#player_1').value;
    playerTwo = document.querySelector('#player_2').value;
    event.preventDefault();
  });


document.querySelector('#restart')
  .addEventListener('click', resetGame);
