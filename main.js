const gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const winCondition = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
]

const getMove = () => {
  const idx = window.event.currentTarget.id

  // TODO: logic for each player play one time
  const sel = document.getElementById(`${idx}`)
  sel.innerHTML = 'X'
  gameBoard[idx - 1] = 'X'
  console.log(gameBoard)

  win(winCondition, gameBoard)
};


const win = (winArray, boardArray) => {
  console.log("START CHECKING")

  for (let count = 0; count < winArray.length; count += 1) {
    if ( winCondition[count].every( index => gameBoard[index] === 'X') ) {
      console.log('WIN WIN')
    }
  }
};



document.querySelectorAll('.block').forEach(item => {
  item.addEventListener('click', getMove);
})


