const mainBoard = document.querySelector('.connecterDisplay')
let playersScore = document.querySelector('#playersScore')
let p1Tag = document.getElementById('p1Tag')
let p2Tag = document.getElementById('p2Tag')

const nameBox = () =>{
    let inputDiv = document.querySelector('#popup')
    let inputDiv2 = document.querySelector('#popup2')
    let playersNm = document.querySelector('#player1')
    let playersNm2 = document.querySelector('#player2')
    let inputName = document.querySelector('#inputName')
    let inputName2 = document.querySelector('#inputName2')
    let inName = document.querySelector('.inName')
    let inputBtn = document.querySelector('#nextBtn')
    let inputBtn2 = document.querySelector('#nextBtn2')



    inputDiv.style.display = 'block'
    inputDiv2.style.display = 'none'

    inputBtn.addEventListener('click', () =>{

        if(inputName.value == ''){
            playersNm.innerHTML = `please enter Name`
            return false
        }
        p1Tag.innerText = `${inputName.value}`

        inputDiv.style.display = 'none'
        inputDiv2.style.display = 'block'
        nextFuntion()

    })

    const nextFuntion = () =>{
        inputBtn2.addEventListener('click', () =>{

            if(inputName2.value == ''){
                playersNm2.innerHTML = `please enter Name`
                return false
            }
            p2Tag.innerText = `${inputName2.value}`
            inputDiv2.style.display = 'none'

        })
    }


}


nameBox()
let board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
];

let pl1Score = 0
let pl2Score = 0
let player1Turn = true
let empArray = []

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

            if (board[row][col] === 1) {
                colElement.classList.add('red')
            }

            if (board[row][col] === 2) {
                colElement.classList.add('black')
            }

        
                colElement.addEventListener('click', () => {
                    checkEmptyColumn(col)
                })
        


        }
   
       

    }

    playersScore.innerText = `${pl1Score}-${pl2Score}`
}

createBoard()



const checkEmptyColumn = (column) => {
    // get column when you click 
    for (let i = board.length - 1; i>=0; i--) {
        console.log(`board row ${i} -> ${board[i][column]}`)
        //if empty set to player color chip
        // return after you do that


        if (board[i][column] === 0) {
                 if (player1Turn) {
                    board[i][column] = 1
                    setTimeout(() => {
                        checkRow()
                        checkColumn()
                        checkLtoR()
                        // checkRtoL()
                    }, 300)
                    p1Tag.style.borderBottom = '2px solid #f76c6c'
                    player1Turn = false

                } else {
                    board[i][column] = 2
                    setTimeout(() => {
                        checkRow()
                        checkColumn()
                        checkLtoR()
                        // checkRtoL()
                    }, 300)
                    p2Tag.style.borderBottom = '2px solid #374785'
                    player1Turn = true
                }
            return  createBoard()
        }

        // createBoard()

        

    }
}

const resetBtn = document.querySelector('#resetBtn')
resetBtn.addEventListener('click', () => {
    location.reload()
})
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

                    pl2Score += 1

                } else {

                    pl1Score += 1
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
                board[i][j] == board[i-1][j + 1] &&
                board[i][j] == board[i-2][j + 2] &&
                board[i][j] == board[i-3][j + 3]
            ) {
                if (player1Turn) {

                    pl2Score += 1

                } else {

                    pl1Score += 1
                }

                reset()
            }
        }
    }

}

// function checkRtoL() {

//     //column
//     for (let i = 0; i < board.length -3; i++) {
//         for (let j = 3; j < board[i].length; j++) {

//             if (board[i][j] != 0 &&
//                 board[i][j] == board[i+1][j - 1] &&
//                 board[i][j] == board[i+2][j - 2] &&
//                 board[i][j] == board[i+3][j - 3]
//             ) {
//                 if (player1Turn) {
//                     alert('player 2 won')
//                 } else {
//                     alert('player 1 won')
//                 }


//                 reset()
//             }
//         }
//     }

// }

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

                    pl2Score += 1
                } else {

                    pl1Score += 1
                }
                reset()
            }

        }

    }
}



