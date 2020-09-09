import boardModule from '../src/board';

describe('playTurn', () => {
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
    boardModule.playTurn(2, player2);
    boardModule.playTurn(3, player1);
    boardModule.playTurn(5, player2);
    boardModule.playTurn(4, player1);
    boardModule.playTurn(6, player2);

    boardModule.playTurn(8, player1);
    boardModule.playTurn(7, player2);

    expect(boardModule.playTurn(9, player1)).toMatchObject('draw');
  });
});

describe('fullBoard', () => {
  it('should be full', () => {
    expect(boardModule.fullBoard(['x','o','x','o','x','o','x','o','x'])).toBe(true)
  });

  it('should not be full', () => {
    expect(boardModule.fullBoard(['x','o','x','o','x','o','x','o', 9])).toBe(false)
  });
});

describe('resetGame', () => {
  it('should reset board array', () => {
    boardModule.gameBoard = ['x', 2, 3, 4, 5, 6, 7, 8, 9];
    expect(boardModule.resetGame(boardModule.gameBoard))
      .toMatchObject([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});