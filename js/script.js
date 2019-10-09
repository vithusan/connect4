const mainBoard = document.querySelector('.connecterDisplay')
const inputDiv = document.querySelector('#inputPlayerName')
const inputName = document.querySelector('#inputName')
const inputBtn = document.querySelector('#nextBtn')


let board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
];

let player1Turn = true
let empArray = []
const createBoard = () => {
    console.table(board)
    //clear the createboard function inside the html
    mainBoard.innerHTML = ''

    //create divs of rows
    for (let row = 0; row < board.length; row++) {
        let rowElement = document.createElement('div')
        rowElement.setAttribute('class', 'row')
        rowElement.setAttribute('data-row', row + 1)
        mainBoard.appendChild(rowElement)
        let rowBtn = document.getElementsByClassName('row')


        //creaet divs in each rows
        for (let col = 0; col < board[row].length; col++) {
            let colElement = document.createElement('div')
            colElement.setAttribute('class', 'eachCir empty')
            colElement.setAttribute('data-col', col + 1)
            //colElement.setAttribute('data-row', row + 1)
            rowElement.appendChild(colElement)

            if (board[row][col] === 1) {
                colElement.classList.add('red')
            }

            if (board[row][col] === 2) {
                colElement.classList.add('black')
            }

            // for (let r = 0; r < rowElement.length; r++) {
            //     rowElement[r].addEventListener('click', () => {
            //         checkEmptyColumn(r)
            //     })
            // }



            colElement.addEventListener('click', function () {
                console.table(board)
                if (player1Turn) {
                    board[row][col] = 1
                    setTimeout(() => {
                        checkRow()
                        checkColumn()
                        checkLtoR()
                        checkRtoL()
                    }, 1000)
                    player1Turn = false
                } else {
                    board[row][col] = 2
                    setTimeout(() => {
                        checkRow()
                        checkColumn()
                        checkLtoR()
                        checkRtoL()
                    }, 1000)
                    player1Turn = true
                }
                createBoard()

            })

        }

    }
}

createBoard()


const checkEmptyColumn = (column) => {
    // get column when you click 
    for (let i = board.length - 1; i >= 0; i--) {
        console.log(`board row ${i} -> ${board[column][i]}`)
        //if empty set to player color chip
        // return after you do that

        for (let c = 0; c < colElement.length; c++) {
            if (board[column][i] === 0) {
                colElement[c].classList.add('red')
                return
            }


        }


    }
}

const reset = () => {
    board = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ];

    createBoard()
}

function checkColumn() {

    //column
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {

            if (board[i][j] != 0 &&
                board[i][j] == board[i][j + 1] &&
                board[i][j] == board[i][j + 2] &&
                board[i][j] == board[i][j + 3]
            ) {
                if (player1Turn) {
                    alert('player 2 won')
                } else {
                    alert('player 1 won')
                }


                reset()
            }
        }
    }

}

function checkLtoR() {

    //column
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {

            if (board[i][j] != 0 &&
                board[i][j] == board[i -1][j + 1] &&
                board[i][j] == board[i-2][j + 2] &&
                board[i][j] == board[i-3][j + 3]
            ) {
                if (player1Turn) {
                    alert('player 2 won')
                } else {
                    alert('player 1 won')
                }


                reset()
            }
        }
    }

}

function checkRtoL() {

    //column
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length -3; j++) {

            if (board[j][i] != 0 &&
                board[j][i] == board[j-1][i + 1] &&
                board[j][i] == board[j-2][i + 2] &&
                board[j][i] == board[j-3][i + 3]
            ) {
                if (player1Turn) {
                    alert('player 2 won')
                } else {
                    alert('player 1 won')
                }


                reset()
            }
        }
    }

}

function checkRow() {


    //row
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length - 3; j++) {

            if (board[j][i] != 0 &&
                board[j][i] == board[j + 1][i] &&
                board[j][i] == board[j + 2][i] &&
                board[j][i] == board[j + 3][i]
            ) {
                if (player1Turn) {
                    alert('player 2 won')
                } else {
                    alert('player 1 won')
                }
                reset()
            }

        }

    }
}

