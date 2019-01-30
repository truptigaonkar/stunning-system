
let inputAddList = document.querySelector('input');
let ulAddList = document.querySelector('#ulAddList');
let formAddList = document.querySelector('form');
formAddList.addEventListener('submit', addList);

//Add/Create Event
function addList(e) {
    e.preventDefault();
    let inputAddList = document.querySelector('input');
    let inputValue = inputAddList.value;
    //Creating node li
    let liAddList = document.createElement('li');
    // Not allowing to add repeated input
    if (inputValue === '') {
        alert('You must write something!');
    } else {
        liAddList.appendChild(document.createTextNode(inputValue)); 
        ulAddList.appendChild(liAddList);
    }

    // Attaching Add card button
    let btnAddCard = document.createElement('button');
    btnAddCard.className = 'addCard';
    btnAddCard.textContent = "+ Add Card";
    //btnAddCard.appendChild(document.createTextNode('+'));
    liAddList.appendChild(btnAddCard);

    // Attaching Delete button
    let btnDelete = document.createElement('button');
    btnDelete.className = 'deleteList';
    btnDelete.textContent = "X";
    //btnDelete.appendChild(document.createTextNode('X'));
    liAddList.appendChild(btnDelete);
}

//Delete Event
ulAddList.addEventListener('click', removeList);
function removeList(e) {
    if (e.target.classList.contains('deleteList')) {
        if (confirm('Are you sure want to delete the element?')) {
            let li = e.target.parentElement;
            ulAddList.removeChild(li);
        }
    }
}

//Add card event
ulAddList.addEventListener('click', addCard);
function addCard(e){
    e.preventDefault();
}

