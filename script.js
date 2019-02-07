'use strict';

let countItem = 0;

let addCardButton = document.querySelector('.addCard');

function addCard(event) {
  event.preventDefault();
  let item = document.createElement('div');
  item.classList.add('list-item');
  countItem ++;
  item.setAttribute('value',countItem);
  item.setAttribute('draggable','true');
  item.addEventListener('dragstart',dragStart);
  item.addEventListener('dragend',dragEnd);

  let textarea = document.createElement('textarea');
  textarea.placeholder = 'Enter a title for this card...';
  textarea.setAttribute('spellcheck', false);

  createDeleteButton(item);
  let dateItemCreation = document.createTextNode(new Date().toLocaleString("sv-SE"));
  item.appendChild(dateItemCreation);
  item.appendChild(textarea);
  event.target.parentNode.querySelector('.item-container').appendChild(item);

  textarea.addEventListener('dblclick',function(event){controlPopUp(event)});
}

function createDeleteButton(item) {
  let deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-item');
  deleteButton.setAttribute('type', 'button');
  deleteButton.innerHTML = 'X';
  item.appendChild(deleteButton);
  deleteButton.addEventListener('click', function(event) {
    event.target.parentNode.remove();
    let deleteIdPoPup = event.target.parentNode.attributes.value.nodeValue;
    let popUpForDelete = document.getElementById(deleteIdPoPup);
    popUpForDelete.remove();

  });
}

function controlPopUp (event) {
  let itemId = event.target.parentNode.attributes.value.nodeValue;
  event.stopPropagation();
  event.preventDefault();
  let popupId = document.getElementById(itemId);

  /* With next (if) conditional we control if is the first time that we opens the
  popup and creates elements /or/ we reopen popup and we must conserve old info and only display */
  /* we do it throw att see if the last children of (list-item) is the doubecliked textarea or is
  en div (popup-container)*/

  if (!!popupId === false){
   let vDivPopUP = document.createElement('div');
   vDivPopUP.className = 'popup-container';
   vDivPopUP.setAttribute('id', itemId);

   let target = event.target;
   let vTitle = document.createElement('input');
   vTitle.placeholder = 'Enter a title for this card...';
   vTitle.value = target.value;
   vTitle.classList.add('popup-container__title');
   vTitle.addEventListener('input', function(event) {
     target.value = vTitle.value;
   });

   let vDatum = document.createElement('h3');
   vDatum.textContent = event.target.previousSibling.textContent;
   vDatum.classList.add('popup-container__datum');

   let description = document.createElement('textarea');
   description.setAttribute('cols', '25');
   description.setAttribute('rows', '10');
   description.setAttribute('spellcheck', false);
   description.placeholder = 'Fill here detailed description...';
   description.classList.add('popup-container__textarea');

   vDivPopUP.appendChild(vTitle);
   vDivPopUP.appendChild(vDatum);
   vDivPopUP.appendChild(description);
   createHidePopupButton(vDivPopUP);

   let popupBackground = document.querySelector('.popup-background');
   popupBackground.appendChild(vDivPopUP);

  }else if(!!popupId === true){
    popupId.firstChild.value = event.target.value;
    popupId.style.display = 'block';
  }else{
    console.log("Somthing wrong i coden. Contacta gruppen");
  }
  showPopupBackground();
}

function createHidePopupButton(vDivPopUP) {
  let hideButton = document.createElement('button');
  hideButton.classList.add('popup-container__button');
  hideButton.setAttribute('type', 'button');
  hideButton.innerHTML = 'Close';
  vDivPopUP.appendChild(hideButton);
  hideButton.addEventListener('click', function(event) {
    event.target.parentNode.style.display = 'none';
    hidePopupBackground();
  });
}

function showPopupBackground() {
  let popupBackground = document.querySelector('.popup-background')
  popupBackground.style.backgroundColor = '#00000069';
  popupBackground.style.display = 'block';
}

function hidePopupBackground() {
  let popupBackground = document.querySelector('.popup-background');
  popupBackground.style.backgroundColor = 'transparent';
  popupBackground.style.display = 'none';
}

function dragStart (e) {
  console.log(e);
  console.log('start');
  this.className += ' hold';
  this.id = 'selected';
  /* Här ger vi en försvinn effekt för att göra
  mer klart vilket item har vi tagit. Å andra sidan med setTimeOut
  vi undvik att item förssvinner innan vi har moved element*/
  setTimeout(()=>{this.className = 'invisible'},0);
}

function dragEnd (e) {
  this.className = 'list-item';
  this.removeAttribute('id');
}
