import boardModule from '../src/board';

describe('test suit for play the game', () => {
  it('should have a winner with winning codition', () => {
    let player1 = {
      mark: 'X',
      name: 'player Test'
    };

    let player2 = {
      mark: 'O',
      name: 'player Test 1'
    };

    boardModule.playTurn(1, player1);
    boardModule.playTurn(2, player2);
    boardModule.playTurn(4, player1);
    boardModule.playTurn(5, player2);
    expect(boardModule.playTurn(7, player1)).toBe('player Test win!');
  });

  it('should have a draw', () => {
    let player1 = {
      mark: 'X',
      name: 'player Test'
    };

    let player2 = {
      mark: 'O',
      name: 'player Test 1'
    };

    boardModule.playTurn(1, player1);
    boardModule.playTurn(4, player2);
    boardModule.playTurn(2, player1);
    boardModule.playTurn(5, player2);
    boardModule.playTurn(3, player1);
    boardModule.playTurn(6, player2);

    boardModule.playTurn(7, player1);
    boardModule.playTurn(8, player2);
    boardModule.playTurn(9, player1);

    expect(boardModule.playTurn(7, player1)).toBe('draw!');
  });
});