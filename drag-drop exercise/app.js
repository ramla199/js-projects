const king = document.querySelector('.chess-piece');
const box = document.querySelectorAll('.box');
const info = document.querySelector('#info')

let beingDragged;
king.addEventListener('dragstart', dragStart)
king.addEventListener('drag',dragging);
box.forEach(box => {
    box.addEventListener('dragover', dragOver)
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragleave', dragLeave)
    box.addEventListener('drop', dragDrop)
    box.addEventListener('dragend',dragEnd)
})

function dragging() {
   info.textContent = 'You are dragging a' + beingDragged.id
}


function dragStart(e) {
   beingDragged = e.target; 
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.target.classList.add('highlight')
}

function dragLeave (e) {
    e.target.classList.remove('highlight')
}

function dragDrop(e) {
 e.target.append(beingDragged);
 setTimeout(()=> e.target.classList.remove('highlight'))
 info.textContent= ' '
}

function dragEnd(e){
    e.target.classList.add('target')
    setTimeout(() => e.target.classList.remove('target'),100)
}
