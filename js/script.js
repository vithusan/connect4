const mainBoard = document.querySelector('.connecterDisplay')
// const playersTurn = document.querySelector('.turns')


// for(let i=0;i<7;i++){
//     const testRow = document.createElement('div')
//     testRow.setAttribute('class', 'testRow')
//     testRow.setAttribute('data-pl', i + 1)
//     playersTurn.appendChild(testRow)
// }

let board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

// let board = [
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0]
// ];

let boardNum
const createBoard = () => {
    //clear the createboard function inside the html
    mainBoard.innerHTML = ''

    //create divs of rows
    for (let row = 0; row < board.length; row++) {
        let rowElement = document.createElement('div')
        rowElement.setAttribute('class', 'row')
        mainBoard.appendChild(rowElement)
        let rowBtn = document.getElementsByClassName('row')
        
        //creaet divs in each rows
        for (let col = 0; col < board[row].length; col++) {
            let colElement = document.createElement('div')
            colElement.setAttribute('class', 'eachCir empty')
            colElement.setAttribute('data-col', col)
            colElement.setAttribute('data-row', row)
            rowElement.appendChild(colElement)
         
           for(let i=0; i<rowBtn.length; i++){
               rowBtn[i].addEventListener('click', () =>{
                colElement.classList.add('testCir2')   
                console.log(i)
               })
           }

        }
    
    }
}

createBoard()
    
const reset = () => {
    board = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]

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
                
                alert('player 1 won')
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
                alert('Player 2 won')
                reset()
            }

        }

    }
}

