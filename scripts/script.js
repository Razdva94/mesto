const main = document.querySelector('.main');
const editButton = document.querySelector('.profile__button-container');
const popup = document.querySelector('.popup');
const crossButton = popup.querySelector('.popup__close-icon');
const formElement = popup.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_job');
const nameOutput = document.querySelector('.profile__title');
const jobOutput = document.querySelector('.profile__text');
const popupOpened = document.querySelector('.popup_opened');

function popupOpen(){
  popup.classList.add('popup_opened');
  nameInput.value = nameOutput.textContent;
  jobInput.value = jobOutput.textContent;
}

if(popupOpened === null){
  editButton.addEventListener('click', popupOpen);
}

  function handleFormSubmit (evt) {
    evt.preventDefault();
  nameOutput.textContent = nameInput.value;
  jobOutput.textContent = jobInput.value;
  popup.classList.remove('popup_opened');
  }
  
  
  formElement.addEventListener('submit', handleFormSubmit);

  function popupClose(){
    popup.classList.remove('popup_opened');
  }

  crossButton.addEventListener('click', popupClose);


