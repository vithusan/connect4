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

let player1Turn = true
const createBoard = () => {
    
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

            let colBtn = document.getElementsByClassName('eachCir')

            // console.log(colBtn)

            // rowElement.addEventListener('click', function() {

            //     //e.preventDefault()
            //     //let num = rowElement.dataset.col
            //     // for(let i=num.length - 1;i>=0; i--){
            //     //    console.log(num[i])

            //         colElement.classList.add('testCir2')
            // //    }

            // })

           
            colElement.addEventListener('click', function(){
                if(player1Turn){
                    colElement.classList.add('red')
                    board[row][col] = 1
                    setTimeout(() => {
                        checkRow()
                        checkColumn()
                        
                    }, 1000)
                    player1Turn = false
                }else {
                    colElement.classList.add('black')
                board[row][col] = 2
                setTimeout(() => {
                    checkRow()
                    checkColumn()
                    
                }, 1000)
                player1Turn = true
                }
                
            })

        }

    }
}

createBoard()

// document.body.addEventListener("click", ".eachCir", function (e) {
//     e.preventDefault();
//     let number = $(this).data('col');
//     console.log(number);
// });

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
                if(player1Turn){
                    alert('player 2 won')
                }else {
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
                if(player1Turn){
                    alert('player 2 won')
                }else {
                    alert('player 1 won')
                }
                reset()
            }

        }

    }
}

