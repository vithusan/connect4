const mainBoard = document.querySelector('.connecterDisplay')
const playersTurn = document.querySelector('.turns')


// for(let i=0;i<7;i++){
//     const testRow = document.createElement('div')
//     testRow.setAttribute('class', 'testRow')
//     testRow.setAttribute('data-pl', i + 1)
//     playersTurn.appendChild(testRow)
// }

for(let i=0;i<2;i++){
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

for(let i=0;i<2;i++){
    const newElement1 = document.createElement('div')
    newElement1.setAttribute('class', 'column')
    newElement1.setAttribute('data-col', i + 1)
    mainBoard.appendChild(newElement1)
    for(let k=0;k<2;k++){
        const newElement2 = document.createElement('div')
        newElement2.setAttribute('class', 'testCir')
        newElement2.setAttribute('data-pos', k + 1)
        newElement1.appendChild(newElement2)
    }
}

const circleDiv = document.getElementsByClassName('testCir')

// for(let i=0; i<circleDiv.length; i++){
//     circleDiv[i].addEventListener('click', () => {
//         alert(`you've clicked ${i +1}`)
//     })
// }

const playerClick = document.querySelectorAll('.testRow')

// const testFunction = () => {
//     if()
// }

for(let i=0;i<playerClick.length; i++){
    playerClick[i].addEventListener('click', testFunction)
}
