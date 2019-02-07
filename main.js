let inputAddList = document.querySelector('input');
let ulAddList = document.querySelector('#ulAddList');
let formAddList = document.querySelector('form');
formAddList.addEventListener('submit', addList);

function addList(e) {
  e.preventDefault();
  let inputAddList = document.querySelector('input');
  inputAddList.setAttribute('spellcheck', false);
  let inputValue = inputAddList.value;
  let liAddList = document.createElement('li');
  liAddList.className = 'li_column';
  if (inputValue === '') {
    inputAddList.classList.add("inputAddList__placeholder");
    inputAddList.placeholder = "You must write something!";
  } else {
    inputAddList.placeholder = 'Enter list title.....'
    inputAddList.classList.remove("inputAddList__placeholder")

    let listTitle = document.createElement('input');
    listTitle.value = inputValue;
    listTitle.classList.add('list-title');
    listTitle.setAttribute('spellcheck', false);
    liAddList.appendChild(listTitle);
    ulAddList.appendChild(liAddList);
    inputAddList.value = '';
  }
  let itemContainer = document.createElement('div');
  itemContainer.classList.add('item-container');

  itemContainer.addEventListener('dragover',dragOver);
  itemContainer.addEventListener('dragenter',dragEnter);
  itemContainer.addEventListener('dragleave',dragLeave);
  itemContainer.addEventListener('drop',dragDrop);
  liAddList.appendChild(itemContainer);

  let btnAddCard = document.createElement('button');
  btnAddCard.className = 'addCard';
  btnAddCard.textContent = "+ Add Card";
  btnAddCard.addEventListener('click', addCard);
  liAddList.appendChild(btnAddCard);

  let btnDelete = document.createElement('button');
  btnDelete.className = 'deleteList';
  btnDelete.textContent = "X";
  liAddList.appendChild(btnDelete);
}

ulAddList.addEventListener('click', removeList);

function removeList(e) {
  e.preventDefault();
    if (e.target.classList.contains('deleteList')) {
      let li = e.target.parentElement;
      ulAddList.removeChild(li);
  }
}

function dragOver (e) {
  e.preventDefault();
}

function dragEnter (e) {
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave (e) {
  this.className = 'item-container';
}

function dragDrop (e) {
  let vSelectedItem = document.querySelector('#selected');
  this.append(vSelectedItem);
}
