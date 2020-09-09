import boardModule from './board';

const Helpers = (() => {
  let playerOne = null;
  let playerTwo = null;
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

  const displayBoard = () => {
    document.querySelector('#board').classList.remove('hide');
  };

  const setPlayerPlayerOne = (name) => {
    playerOne = Player(name, 'X');
  };

  const setPlayerPlayerTwo = (name) => {
    playerTwo = Player(name, 'O');
  };

  const restartTurn = () => {
    turn = 1;
  };

  return {
    Player,
    showMessage,
    setMark,
    getMove,
    displayBoard,
    setPlayerPlayerOne,
    setPlayerPlayerTwo,
    restartTurn,
  };
})();

export default Helpers;
