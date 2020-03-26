
// add click listeners
document.querySelectorAll('.game-board .box').forEach(el => el.addEventListener('click', onClick))

let player = 'X'

function switchPlayer() {
    player = player === 'X' ? 'O' : 'X'
}

function getBoard() {
    const board = []
    document.querySelectorAll('.game-board .box').forEach(el => board.push(el.textContent))
    return board
}

function checkEndGame() {
    const board = getBoard()
    if (isVictory(board)) {
        alert('winner winner, ' + player)
    } else if (isCats(board)) {
        alert('cats game')
    }
}

function isCats(board) {
    return !board.some(x => x === '')
}

function isVictory(board) {
    for (let i = 0; i < 3; i++) {
        const row = i * 3;
        const col = i;

        if (
            // check row
            (board[row] && (board[row] === board[row + 1] && board[row + 1] === board[row + 2])) ||
            // check col
            (board[col] && (board[col] === board[col + 3] && board[col + 3] === board[col + 6])) ||
            // check diag
            (board[0] && board[0] === board[4] && board[4] === board[8]) ||
            (board[2] && board[2] === board[4] && board[4] === board[6])
        ) {
            return true
        }
    }
}

function onClick() {
    // get contet of cell
    const marker = this.textContent

    if (marker === '') {
        this.textContent = player
        setTimeout(() => {
            checkEndGame()
            switchPlayer()
        })
    }
}