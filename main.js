import boardModule from './board';

let playerOne;
let playerTwo;
let turn = 1;

const Player = (name, mark = 'X') => ({ name, mark });

const showMessage = (msg) => {
  const sel = document.body.querySelector('#message');
  const insert = document.createElement('p');
  insert.innerHTML = msg;
  sel.appendChild(insert);
};

const setMark = (sel, idx, player) => {
  if (sel.innerHTML !== playerOne.mark && sel.innerHTML !== playerTwo.mark) {
    sel.innerHTML = player.mark;
    const status = boardModule.playTurn(idx, player);
    if (status !== true) {
      showMessage(status);
    }
  }
};

const getMove = () => {
  const idx = window.event.currentTarget.id;
  const sel = document.getElementById(`${idx}`);
  if (turn === 1) {
    setMark(sel, idx, playerOne);
    turn = 2;
  } else if (turn === 2) {
    setMark(sel, idx, playerTwo);
    turn = 1;
  }
};

document.querySelectorAll('.block').forEach((item) => {
  item.addEventListener('click', getMove);
});

const displayBoard = () => { document.querySelector('#board').classList.remove('hide'); };

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
