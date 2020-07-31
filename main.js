const gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let turn = 0;

const getMove = () => {
  console.log(window.event.currentTarget.id);
};

document.querySelectorAll('.block').forEach(item => {
  item.addEventListener('click',getMove);
})
