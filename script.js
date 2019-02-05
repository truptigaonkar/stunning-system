let addCardButton = document.querySelector('.addCard');

function addCard(event) {
  event.preventDefault();
  let item = document.createElement('div');
  item.classList.add('list-item');
  let textarea = document.createElement('textarea');
  textarea.placeholder = 'Enter a title for this card...';
  textarea.setAttribute('spellcheck', false);
  createDeleteButton(item);
  item.appendChild(textarea);
  event.target.parentNode.querySelector('.item-container').appendChild(item);
  //
  // Here begins Ricardo´s coden in Joanna´s addCard function
  // 
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
/*********************** Ricardo ********************/
//
function controlPopUp (event) {
    event.stopPropagation();
    event.preventDefault();
    //if (det finns info created, hoppas creating delen och only show)
    //Create container for describing box
    console.log(event);
    /// aqui consigo el titulo de la card
    console.log(event.target.value);
    //

    let vDiv = document.createElement('div');
    vDiv.className = 'popup-container';
    let vForm = document.createElement('form');
    vForm.className = 'popup-form';
    //Create aditional title
    let vCardTitle = document.createElement('input');
    vCardTitle.setAttribute('placeholder','  Add aditional Title');
    vCardTitle.setAttribute('type','text');
    vCardTitle.className = 'popup-form__input';
    //
    //datum
    let vKlockan = document.createElement('h4');
    let datum  = new Date();
    console.log(datum.toLocaleString('sv-SE'));
    vKlockan.textContent = ` Card has been created ${datum} `;
    //
    // provisionellt Arkitektur
    //event.target.parentNode.querySelector('.item-container').appendChild(item);
    //vBody.appendChild(vDiv);
    vDiv.appendChild(vKlockan);
    vDiv.appendChild(vForm);
    vForm.appendChild(vCardTitle);
    event.target.parentNode.appendChild(vDiv);
    
    //
    
    

}

function testcb(){
  console.log("doubleclick event ");
}

// la segunda vez que clickemos si tiene ya el hijo, no creamos,
//solo visualizamos// chekeamos si tiene algun alemento como hijo del formulario

//createPop();
