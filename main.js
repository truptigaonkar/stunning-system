
let inputAddList = document.querySelector('input');
let ulAddList = document.querySelector('#ulAddList');
let formAddList = document.querySelector('form');
formAddList.addEventListener('submit', addList);

//Add/Create Event
function addList(e) {
    e.preventDefault();
    let inputAddList = document.querySelector('input');
    // Removed spellcheck to avoid red underlines - Joanna
    inputAddList.setAttribute('spellcheck', false);
    let inputValue = inputAddList.value;
    //Creating node li
    let liAddList = document.createElement('li');
    liAddList.className = 'li_column';
    console.log(liAddList);
    // Not allowing to add repeated input
    if (inputValue === '') {
        alert('You must write something!');
    } else {
    // Changed fom textnode to an input so that the title of the list can be edited by a user - Joanna
        let listTitle = document.createElement('input');
        listTitle.value = inputValue;
        listTitle.classList.add('list-title');
    // Removed spellcheck to avoid red underlines - Joanna    
        listTitle.setAttribute('spellcheck', false);
        liAddList.appendChild(listTitle);
        ulAddList.appendChild(liAddList);
    // Emptying the input field after adding a list - Joanna
        inputAddList.value = '';
    }

    // Creating a card container to more easily append a card into - Joanna
    let itemContainer = document.createElement('div');
    itemContainer.classList.add('item-container');
    liAddList.appendChild(itemContainer);

    // Attaching Add card button
    let btnAddCard = document.createElement('button');
    btnAddCard.className = 'addCard';
    btnAddCard.textContent = "+ Add Card";
    // Added an eventlistener on the add card button - Joanna
    btnAddCard.addEventListener('click', addCard);
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
  e.preventDefault();
    if (e.target.classList.contains('deleteList')) {
        if (confirm('Are you sure want to delete the element?')) {
            let li = e.target.parentElement;
            ulAddList.removeChild(li);
        }
    }
}

//Add card event
/*ulAddList.addEventListener('click', addCard);
function addCard(e){
    e.preventDefault();
}*/
