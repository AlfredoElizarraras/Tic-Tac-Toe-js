import './css/style.css';
import boardModule from './board';
import Helpers from './helpers';

document.querySelectorAll('.block').forEach((item) => {
  item.addEventListener('click', Helpers.getMove);
});

document.querySelector('#start').addEventListener('click', (event) => {
  Helpers.displayBoard();
  const playerOneName = document.querySelector('#player_1').value;
  const playerTwoName = document.querySelector('#player_2').value;
  Helpers.setPlayerPlayerOne(playerOneName);
  Helpers.setPlayerPlayerTwo(playerTwoName);
  event.preventDefault();
});

document
  .querySelector('#restart')
  .addEventListener('click', () => {
    Helpers.restartTurn();
    boardModule.resetGame();
  });
