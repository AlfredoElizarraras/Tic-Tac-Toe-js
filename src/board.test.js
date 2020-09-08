import boardModule from './board'; // eslint-disable-line import/extensions

describe('test suit for analyze array', () => {
  it('should tell if the player won', () => {
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
});
