const mainBoard = document.querySelector('.connecterDisplay')



// for(let i=0; i<42; i++){
//     const newElement = document.createElement('div')
//     newElement.setAttribute('class', 'testCir')
//     mainBoard.appendChild(newElement)
// }

// for(let i=0; i<4; i++){
//     const newElement = document.createElement('div')
//     newElement.setAttribute('class', 'testCir')
//     newElement.setAttribute('data-pos', i + 1)
//     mainBoard.appendChild(newElement)
// }

for(let i=0;i<7;i++){
    const newElement1 = document.createElement('div')
    newElement1.setAttribute('class', 'column')
    newElement1.setAttribute('data-col', i + 1)
    mainBoard.appendChild(newElement1)
    for(let k=0;k<6;k++){
        const newElement2 = document.createElement('div')
        newElement2.setAttribute('class', 'testCir')
        newElement2.setAttribute('data-pos', k + 1)
        newElement1.appendChild(newElement2)
    }
}

const circleDiv = document.getElementsByClassName('testCir')

for(let i=0; i<circleDiv.length; i++){
    circleDiv[i].addEventListener('click', () => {
        alert(`you've clicked ${i +1}`)
    })
}
