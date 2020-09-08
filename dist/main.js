/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    return false;
  };

  const resetGame = () => {
    gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    document.querySelectorAll('.block').forEach((item) => {
      item.innerHTML = '';
    });
  };

  const playTurn = (block, player) => {
    gameBoard[block - 1] = player.mark;
    const arr = [...gameBoard];

    for (let count = 0; count < winCondition.length; count += 1) {
      if (
        winCondition[count].every((index) => arr[index] === player.mark)
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
    resetGame
  };
})();

/* harmony default export */ __webpack_exports__["default"] = (boardModule);


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _board_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board.js */ "./src/board.js");




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
    const status = _board_js__WEBPACK_IMPORTED_MODULE_1__["boardModule"].playTurn(idx, player);
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
    _board_js__WEBPACK_IMPORTED_MODULE_1__["boardModule"].resetGame();
  });


/***/ })

/******/ });