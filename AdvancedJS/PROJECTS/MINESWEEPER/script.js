// Display/UI

import { createBoard } from "./minesweeper.js";

const BOARD_SIZE = 10
const NUMBER_OF_MINES = 10

const board = createBoard(BOARD_SIZE, NUMBER_OF_MINES)
const boardElement = document.querySelector(".board")

board.forEach(row => {
    row.forEach(tile => {
        boardElement.append(tile.element)
    })
})
boardElement.style.setProperty('--size', BOARD_SIZE)


// Populate the board with tiles/mines
// Left click on tiles - reveal
// Right click on tiles - mark
// Check for win/lose