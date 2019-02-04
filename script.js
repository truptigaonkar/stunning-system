let addCardButton = document.querySelector('.addCard');

function addCard(event) {
  event.preventDefault();
  let item = document.createElement('div');
  item.classList.add('list-item');
  let textarea = document.createElement('textarea');
  textarea.placeholder = 'Enter a title for this card...';
  textarea.setAttribute('spellcheck', false);
  createDeleteButton(item);

  // Date when item was created --- Trupti
  let dateItemCreation = document.createTextNode(new Date().toLocaleDateString("en-SE"));
  item.appendChild(dateItemCreation);

  item.appendChild(textarea);
  event.target.parentNode.querySelector('.item-container').appendChild(item);
}

function createDeleteButton(item) {
  let deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-item');
  deleteButton.setAttribute('type', 'button');
  deleteButton.innerHTML = 'X';
  item.appendChild(deleteButton);
  deleteButton.addEventListener('click', function(event) {
    event.target.parentNode.remove();
  });
}
