let formAddList = document.querySelector('form');
let inputAddList = document.querySelector('input');
let ulAddList = document.querySelector('#ulAddList');
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
    btnAddCard.appendChild(document.createTextNode('Add Card'));
    liAddList.appendChild(btnAddCard);

    // Attaching Delete button
    let btnDelete = document.createElement('button');
    btnDelete.className = 'delete';
    btnDelete.appendChild(document.createTextNode('Delete'));
    liAddList.appendChild(btnDelete);
}

//Delete Event
ulAddList.addEventListener('click', removeList);
function removeList(e){
    if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure want to delete the element?')) {
        let li = e.target.parentElement;
        ulAddList.removeChild(li);
    }
}
}