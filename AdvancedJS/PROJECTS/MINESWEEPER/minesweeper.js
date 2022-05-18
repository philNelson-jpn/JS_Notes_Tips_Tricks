// Logic

const TILE_STATUSES = {
    HIDDEN: "hidden",
    MINE: "mine",
    NUMBER: "number",
    MARKED: "marked",
}

export function createBoard(boardSize, numberOfMines){
    const board = []
    const minePositions = getMinePositions(boardSize, numberOfMines)
    console.log(minePositions)

    for (let x = 0; x < boardSize; x++) {
        const row = []
        for (let y = 0; y < boardSize; y++) {
            const element = document.createElement("div")
            element.dataset.status = TILE_STATUSES.HIDDEN

            const tile = {
                element,
                x,
                y,
                mine: true,
                get status(){
                    return element.dataset.status
                },
                set status(value){
                    this.element.dataset.status = value
                }
            }

            row.push(tile)
        }
    board.push(row)
    }
    return board
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