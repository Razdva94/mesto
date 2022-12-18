let main = document.querySelector('.main');
let editButton = main.querySelector('.profile__button-container');
let popup = main.querySelector('.popup');
let crossButton = popup.querySelector('.popup__close-icon');
let saveButton = popup.querySelector('.popup__button');
let formElement = popup.querySelector('.popup__form');

function handleFormSubmit (evt) {
  evt.preventDefault();

let nameInput = formElement.querySelector('.popup__input_type_name');
let jobInput = formElement.querySelector('.popup__input_type_job');
let nameOutput = main.querySelector('.profile__title');
let jobOutput = main.querySelector('.profile__text');

jobOutput.textContent = jobInput.value;
nameOutput.textContent = nameInput.value;
}




formElement.addEventListener('submit', handleFormSubmit);




function popupOpenClose(){
  popup.classList.toggle('popup_opened');
}
editButton.addEventListener('click', popupOpenClose);
crossButton.addEventListener('click', popupOpenClose);
saveButton.addEventListener('click',popupOpenClose );

 