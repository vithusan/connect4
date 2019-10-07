const mainBoard = document.querySelector('.connecterDisplay')
const playersTurn = document.querySelector('.turns')


// for(let i=0;i<7;i++){
//     const testRow = document.createElement('div')
//     testRow.setAttribute('class', 'testRow')
//     testRow.setAttribute('data-pl', i + 1)
//     playersTurn.appendChild(testRow)
// }


for (let i = 0; i < 4; i++) {
    const testRow = document.createElement('div')
    testRow.setAttribute('class', 'testRow')
    testRow.setAttribute('data-pl', i + 1)
    playersTurn.appendChild(testRow)
}

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

const createBoard = () => {
    mainBoard.innerHTML = ''
    for (let row = 0; row < board.length; row++) {
        let rowElement = document.createElement('div')
        rowElement.setAttribute('class', 'row')
        mainBoard.appendChild(rowElement)

        //console.log(row)
        for (let pos = 0; pos < board[row].length; pos++) {
            let inidCir = document.createElement('div')
            inidCir.textContent += board[row][pos]
            inidCir.setAttribute('class', 'eachCir')
            rowElement.appendChild(inidCir)
            // inidCir.addEventListener('click', () => {

            //     board[row][pos] = 1
            //    changeColorFunction()
            //     createBoard()
            //     checkColumn()
            //     checkRow()


            // })

            
            
        }
    }
}

createBoard()
runFunction()
const inidCirBtn = document.getElementsByClassName('eachCir')

const runFunction=() =>{

    for(let r =0;r<board.length;r++){
        for(let p=0; p<board[r].length;p++){
    
            inidCirBtn.addEventListener('click', () => {
                console.log(p)
            })
            
        }
    }
}


const rows = document.getElementsByClassName('row')


//MAKE AN ARRAY WITHIN AN ARRAY TO STORE ALL THE CIRCLUES

// let board = [
//     [1, 5, 9, 13],
//     [2, 6, 10, 14],
//     [3, 7, 11, 15],
//     [4, 8, 12, 16]
// ];

// let board = [
//     [0, 0, 0, 0, 0, 0, 0],
//     ['1', '2', '3', '4', '5', '6', '7'],
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0]
// ];



// function checkColumn() {

//     //row
//     for (let i = 0; i < board.length; i++) {
//         for (let j = 0; j < board[i].length; j++) {

//             if (board[i][j] != 0 &&
//                 board[i][j] == board[i][j + 1] &&
//                 board[i][j] == board[i][j + 2] &&
//                 board[i][j] == board[i][j + 3]
//             ) {
//                 console.log('column')
//                 console.log(board[i][j])
//             }
//         }
//     }

// }

// function checkRow() {


//     //column
//     for (let i = 0; i < board.length; i++) {
//         for (let j = 0; j < board.length - 3; j++) {

//             if (board[j][i] != 0 &&
//                 board[j][i] == board[j + 1][i] &&
//                 board[j][i] == board[j + 2][i] &&
//                 board[j][i] == board[j + 3][i]
//             ) {
//                 console.log('row')
//                 console.log(board[j][i])
//             }

//         }

//     }
// }



function checkColumn() {

    //row
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {

            if (board[i][j] != 0 &&
                board[i][j] == board[i][j + 1] &&
                board[i][j] == board[i][j + 2] &&
                board[i][j] == board[i][j + 3]
            ) {
                console.log('column')
                console.log(board)
            }
        }
    }

}

function checkRow() {


    //column
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length - 3; j++) {

            if (board[j][i] != 0 &&
                board[j][i] == board[j + 1][i] &&
                board[j][i] == board[j + 2][i] &&
                board[j][i] == board[j + 3][i]
            ) {
                console.log('row')
                console.log(board)
            }

        }

    }
}

