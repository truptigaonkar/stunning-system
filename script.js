'use strict';

let addCardButton = document.querySelector('.addCard');

function addCard(event) {
  event.preventDefault();
  let item = document.createElement('div');
  item.classList.add('list-item');
  let textarea = document.createElement('textarea');
  textarea.placeholder = 'Enter a title for this card...';
  textarea.setAttribute('spellcheck', false);
  createDeleteButton(item);
  //
  // Date when item was created --- Trupti
  //
  
  /*Trupti I have only changed your localDate settings because I'm interesting 
  att see clock time. thx*/
  //
  //let dateItemCreation = document.createTextNode(new Date().toLocaleDateString("en-SE")); 
  let dateItemCreation = document.createTextNode(new Date().toLocaleString("sv-SE"));
  item.appendChild(dateItemCreation);

  item.appendChild(textarea);
  event.target.parentNode.querySelector('.item-container').appendChild(item);
  //
  // Kontroll PopUp when item is DoubleClicked. --- Ricardo
  //
  // (note: dbclick is activated on textarea´s item ('textarea') because it has the largest area for do it 
  // comfortable and also textarea has pointerfinger activated )
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
  });
}
//
//
/*********************** Ricardo ********************/
//
//
function controlPopUp (event) {
  //
  event.stopPropagation();
  event.preventDefault();
  console.log(event);
  let vTitle = document.createElement('h1');
  //
  /* With next (if) conditional we control if is the first time that we opens the 
  popup and creates elements /or/ we reopen popup and we must conserve old info and only display */
  /* we do it throw att see if the last children of (list-item) is the doubecliked textarea or is 
  en div (popup-container)*/
  //
  if (event.target.parentNode.lastChild.className === ''){
   console.log('card have not popup ');
   let vDivPopUP = document.createElement('div');
   vDivPopUP.className = 'popup-container';
   //
   //readTitle();
   let vTitle = document.createElement('h1');
   vTitle.textContent = event.target.value;
   vTitle.classList.add('popup-container__title');
   //
   let vDatum = document.createElement('h3');
   vDatum.textContent = event.target.previousSibling.textContent;
   vDatum.classList.add('popup-container__datum');
   //
   let description = document.createElement('textarea');
   description.setAttribute('cols', '25');
   description.setAttribute('rows', '10');
   description.placeholder = 'Fill here detailed description...';
   description.classList.add('popup-container__textarea');
   //
   vDivPopUP.appendChild(vTitle);
   vDivPopUP.appendChild(vDatum);
   vDivPopUP.appendChild(description);
   createHidePopupButton(vDivPopUP);
   //
   event.target.parentNode.appendChild(vDivPopUP);
  }else if(event.target.parentNode.lastChild.className === 'popup-container'){ 
    console.log('Item selected have en popup created');
    /*Here I refresh Title to accept the possibility that user re-edit it later*/
    event.target.parentNode.lastChild.firstChild.textContent = event.target.value;
    /* display popup*/
    event.target.parentNode.lastChild.style.display = 'block';
  }else{
    console.log("Somthing wrong i coden. Contacta gruppen");
  }
}

function createHidePopupButton(vDivPopUP) {
  let hideButton = document.createElement('button');
  hideButton.classList.add('popup-container__button');
  hideButton.setAttribute('type', 'button');
  hideButton.innerHTML = 'Close';
  vDivPopUP.appendChild(hideButton);
  hideButton.addEventListener('click', function(event) {
  event.target.parentNode.style.display = 'none';
  });
}

