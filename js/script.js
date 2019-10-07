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

// for(let i=0;i<7;i++){
//     const newElement1 = document.createElement('div')
//     newElement1.setAttribute('class', 'column')
//     newElement1.setAttribute('data-col', i + 1)
//     mainBoard.appendChild(newElement1)
//     for(let k=0;k<6;k++){
//         const newElement2 = document.createElement('div')
//         newElement2.setAttribute('class', 'testCir')
//         newElement2.setAttribute('data-pos', k + 1)
//         newElement1.appendChild(newElement2)
//     }
// }


//make this a function
for (let i = 0; i < 4; i++) {
    const newElement1 = document.createElement('div')
    newElement1.setAttribute('class', 'column')
    newElement1.setAttribute('data-col', i + 1)

    mainBoard.appendChild(newElement1)
    for (let k = 0; k < 4; k++) {
        const newElement2 = document.createElement('div')
        newElement2.setAttribute('class', 'testCir')
        newElement1.appendChild(newElement2)
    }
}

// const circleDiv = document.getElementsByClassName('testCir')

// for(let i=0; i<circleDiv.length; i++){
//     circleDiv[i].addEventListener('click', () => {
//         alert(`you've clicked ${i +1}`)
//     })
// }


//MAKE AN ARRAY WITHIN AN ARRAY TO STORE ALL THE CIRCLUES

const player1Array = []


const columnBtn = document.getElementsByClassName('column')
const test2 = document.getElementsByClassName('testCir')
const test11 = document.querySelector('.testCir')

const topBtn = document.getElementsByClassName('testRow')
// const columnFunction = () => {
//     for (let y = 0; y < test1.length; y++) {

//         test1[y].addEventListener('click', ()=>{
//             //if(test1[y].classList.contains['column']){
//                 //for(let i=0; i<test2.length; i++){
//                     if(test11.classList.contains('testCir')){
//                         test11.classList.add('testCir2')
//                     }
//                     console.log(test11)
//                 //}
//             //}

//         })



//         // for (let i = 0; i < test2.length; i++) {
//         //     //console.log(test2[i])
//         //     //test2[i].classList.add('testCir2')
//         //     // if(test2[i].classList.contains('testCir2')){
//         //     //     console.log('red')
//         //     // }
//         //     //console.log(test1[y])
//         //     test1[y].addEventListener('click', () => {
//         //         if (test1[y][i].classList.contains('testCir')) {
//         //             test1[y][i].classList.add('testCir2')
//         //             player1Array.push(test2[i])
//         //         }
//         //     })

//         //     //    if(player1Array.length > 0  && player1Array[i].classList.contains('testCir2')){
//         //     //        alert('done')
//         //     //    }
//         // }
//     }
// }

//const connect4 = [test1]


let board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

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



function checkRow() {

    //row
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            
            if(board[i][j] != 0 &&
                board[i][j] == board[i][j + 1] && 
                board[i][j] == board[i][j + 2] &&
                board[i][j] == board[i][j + 3]
                ){
                    alert('lsdkfj')
                    console.log(board[i][j])
                }
        }
    }

}

function checkColumn() {


    //column
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length -3; j++) {
            
            if(board[j][i] != 0 &&
                board[j][i] == board[j + 1][i] && 
                board[j][i] == board[j + 2][i] &&
                board[j][i] == board[j + 3][i]
                ){
                    alert('lksdjfs')
                    console.log(board[j][i])
                }
            
        }
        
    }
}

function clickCir() {
    
    for(let i=0;i<topBtn.length;i++){
        topBtn[i].addEventListener('click', (e) =>{
           // console.log(columnBtn[i].dataset.col)
            //let rightCol = columnBtn[i].dataset.col
            for(let y=columnBtn[i].length - 1; y>=0; y--){
                board[i][columnBtn[i].dataset.col] = 1
                test2[i].classList.add('testCir2')
                console.log(board)
           }

        })
    }

    // for(let i=test2.length -1;i>=0; i--){
    //     test2[i].addEventListener('click', (e)=>{
    //         //test2[i].classList.add('testCir2')
    //         //test2[i].setAttribute('data-red', 1)
    //         e.target.classList.add('testCir2')
    //         e.target.setAttribute('data-red', 1)
    //         //board[i].push(test2[i].dataset.red)
    //         board[i][parseInt(e.target.dataset.red)] = e.target.dataset.red
    //         console.log(board)
    //         console.log(test2[i])
    //     })
    // }
}


clickCir()
//columnFunction()

