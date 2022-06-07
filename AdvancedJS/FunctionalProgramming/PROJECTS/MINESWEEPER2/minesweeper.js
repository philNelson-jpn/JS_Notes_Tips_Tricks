// Logic

export const TILE_STATUSES = {
    HIDDEN: "hidden",
    MINE: "mine",
    NUMBER: "number",
    MARKED: "marked",
}

export function createBoard(boardSize, numberOfMines){
    const board = []
    const minePositions = getMinePositions(boardSize, numberOfMines)

    for (let x = 0; x < boardSize; x++) {
        const row = []
        for (let y = 0; y < boardSize; y++) {
            const tile = {
                x,
                y,
                mine: minePositions.some(positionMatch.bind(null, { x, y })),
                status: TILE_STATUSES.HIDDEN
            }
            row.push(tile)
        }
    board.push(row)
    }
    return board
}

export function revealTile(board, { x, y }){
    const tile = board[x][y]
    if (tile.status !== TILE_STATUSES.HIDDEN){
        return board
    }

    if (tile.mine) {
        return replaceTile(board, { x, y }, {...tile, status: TILE_STATUSES.MINE})
    }

    tile.status = TILE_STATUSES.NUMBER

    const adjacentTiles = nearbyTiles(board, tile)
    const mines = adjacentTiles.filter(t => t.mine)
    const newBoard = replaceTile(board, { x, y }, { ...tile, status: TILE_STATUSES.NUMBER, adjacentMinesCount: mines.length })
    if (mines.length === 0){
        return adjacentTiles.reduce((b, t) => {
            return revealTile(b, t)
        }, newBoard)
    } 
    return newBoard
}

export function markTile(board, { x, y }){
    const tile = board[x][y]
    if (
        tile.status !== TILE_STATUSES.HIDDEN && 
        tile.status !== TILE_STATUSES.MARKED
    ) {
        return board
    }

    if (tile.status === TILE_STATUSES.MARKED){
        return replaceTile(board, { x, y }, { ...tile, status: TILE_STATUSES.HIDDEN })
    } else {
        return replaceTile(board, { x, y }, { ...tile, status: TILE_STATUSES.MARKED })
    }
}

function replaceTile(board, position, newTile){
    return board.map((row, x) => {
        return row.map((tile, y) => {
            if (positionMatch(position, { x, y })){
                return newTile
            }
            return tile
        })
    })
}

export function checkWin(board){
    return board.every(row => {
        return row.every(tile => {
            return tile.status === TILE_STATUSES.NUMBER || (tile.mine && (tile.status === TILE_STATUSES.HIDDEN || tile.status === TILE_STATUSES.MARKED))
        })
    })
}

export function checkLose(board){
    return board.some(row => {
        return row.some(tile => {
            return tile.status === TILE_STATUSES.MINE
        })
    })
}

function getMinePositions(boardSize, numberOfMines){
    const positions = []

    while(positions.length < numberOfMines){
        const position = {
            x: randomNumber(boardSize),
            y: randomNumber(boardSize)
        }

        if(!positions.some(positionMatch.bind(null, position))){
            positions.push(position)
        }
    }

    return positions
}
function positionMatch(a, b){
    return a.x === b.x && a.y === b.y
}

function randomNumber(size){
    return Math.floor(Math.random() * size)
}

function nearbyTiles(board, { x, y }){
    const tiles = []

    for (let xOffset = -1; xOffset <= 1; xOffset++) {
           for (let yOffset = -1; yOffset <= 1; yOffset++) {
                const tile = board[x + xOffset]?.[y + yOffset]
                if (tile) tiles.push(tile)
            }
    }

    return tiles
}