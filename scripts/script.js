const main = document.querySelector('.main');
const editButton = document.querySelector('.profile__button-container');
const plusButton = document.querySelector('.profile__add-button');

const popupSaved = document.querySelector('.popup__saved');
const crossButtonSaved = popupSaved.querySelector('.popup__close-icon');
const formElementSaved = popupSaved.querySelector('.popup__form');
const nameInputSaved = formElementSaved.querySelector('.popup__input_type_name');
const jobInputSaved = formElementSaved.querySelector('.popup__input_type_job');
const nameOutputSaved = document.querySelector('.profile__title');
const jobOutputSaved = document.querySelector('.profile__text');

const popupCreate = document.querySelector('.popup__create');
const crossButtonCreate = popupCreate.querySelector('.popup__close-icon');
const formElementCreate = popupCreate.querySelector('.popup__form');
const nameInputCreate = popupCreate.querySelector('.popup__input_type_name');
const placeInputCreate = popupCreate.querySelector('.popup__input_type_job');

const popupOpened = document.querySelector('.popup_opened');
const userCardsContainer = document.querySelector('.elements');
const templateCard = document.querySelector('#element').content;


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];




function popupSavedOpen() {
  popupSaved.classList.add('popup_opened');
  nameInputSaved.value = nameOutputSaved.textContent;
  jobInputSaved.value = jobOutputSaved.textContent;
}

function popupSavedClose() {
  popupSaved.classList.remove('popup_opened');

}

function popupCreateOpen() {
  popupCreate.classList.add('popup_opened');
  nameInputCreate.value = null;
  placeInputCreate.value = null;
}

function popupCreateClose() {
  popupCreate.classList.remove('popup_opened')
}

function handleFormSubmitSaved(evt) {
  evt.preventDefault();
  nameOutputSaved.textContent = nameInputSaved.value;
  jobOutputSaved.textContent = jobInputSaved.value;
  popupSavedClose();
}
function handleFormSubmitCrete(evt) {
  evt.preventDefault();
  initialCards.push({
    name: nameInputCreate.value ,
    link: placeInputCreate.value
  });
  const cardReference = templateCard.querySelector('.element__image');
  cardReference.src = initialCards[initialCards.length-1].link;
  const cardText = templateCard.querySelector('.element__text');
  cardText.textContent = initialCards[initialCards.length-1].name;
  const userCard = templateCard.querySelector('.element').cloneNode(true);
  userCardsContainer.prepend(userCard);
  popupCreateClose();
}

initialCards.forEach(function (item) {
  const cardReference = templateCard.querySelector('.element__image');
  cardReference.src = item.link;
  const cardText = templateCard.querySelector('.element__text');
  cardText.textContent = item.name;
  const userCard = templateCard.querySelector('.element').cloneNode(true);
  userCardsContainer.append(userCard);
})

editButton.addEventListener('click', popupSavedOpen);
crossButtonSaved.addEventListener('click', popupSavedClose);
formElementSaved.addEventListener('submit', handleFormSubmitSaved);

plusButton.addEventListener('click', popupCreateOpen);
crossButtonCreate.addEventListener('click', popupCreateClose);
formElementCreate.addEventListener('submit', handleFormSubmitCrete);













