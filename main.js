
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
        //alert('You must write something!');
        inputAddList.classList.add("inputAddList__placeholder");
        inputAddList.placeholder = "You must write something!";
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
    //
    // Listeners for item´s container (.item-container) -- Ricardo
    itemContainer.addEventListener('dragover',dragOver);
    itemContainer.addEventListener('dragenter',dragEnter);
    itemContainer.addEventListener('dragleave',dragLeave);
    itemContainer.addEventListener('drop',dragDrop);

 
    //
    //add ondrop="drop(event)" ondragover="allowDrop(event)
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
        // if (confirm('Are you sure want to delete the element?')) {
            let li = e.target.parentElement;
            ulAddList.removeChild(li);
        // }
    }
}

// Drag Functions for (.item-container) --Ricardo 

function dragOver (e) {
    e.preventDefault();
    console.log('over');
    // body... 
}

function dragEnter (e) {
    e.preventDefault();
    console.log('enter');
    this.className += ' hovered';
    // body... 
}

function dragLeave (e) {
    console.log('leave');
    this.className = 'item-container';
    // body... 
}

function dragDrop (e) {
    //console.log(e);
    console.log('drop');
    /*här skulle man
     append item i den nya container 
    igenom (append() men dyker upp problemet att jag vet inte preciss
    vilket item har jag tagit, då jag kommer tillbaka till 
    item functions för att skapa någon flag ( jag planerar att
    skapa en temporary #id vilken jag kan använda här)*/
    let vSelectedItem = document.querySelector('#selected');
    this.append(vSelectedItem); 
}