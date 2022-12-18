const main = document.querySelector('.main');
const editButton = main.querySelector('.profile__button-container');
const popup = main.querySelector('.popup');
const crossButton = popup.querySelector('.popup__close-icon');
const formElement = popup.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_job');
const nameOutput = main.querySelector('.profile__title');
const jobOutput = main.querySelector('.profile__text');

function handleFormSubmit (evt) {
  evt.preventDefault();
jobOutput.textContent = jobInput.value;
nameOutput.textContent = nameInput.value;
popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', handleFormSubmit);

function popupOpen(){
  popup.classList.add('popup_opened')
  nameInput.textContent = nameOutput.value;
  jobInput.textContent = jobOutput.value;
}
editButton.addEventListener('click', popupOpen);

