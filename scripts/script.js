const main = document.querySelector('.main');
const editButton = document.querySelector('.profile__button-container');
const plusButton = document.querySelector('.profile__add-button');

const popupSaved = document.querySelector('.popup_type_saved');
const crossButtonSaved = popupSaved.querySelector('.popup__close-icon');
const formElementSaved = document.forms["form-save"];
const nameInputSaved = formElementSaved.querySelector('.popup__input_type_name');
const jobInputSaved = formElementSaved.querySelector('.popup__input_type_job');
const nameOutputSaved = document.querySelector('.profile__title');
const jobOutputSaved = document.querySelector('.profile__text');

const popupCreate = document.querySelector('.popup_type_create');
const crossButtonCreate = popupCreate.querySelector('.popup__close-icon');
const formElementCreate = document.forms["form-create"];
const nameInputCreate = popupCreate.querySelector('.popup__input_type_name');
const placeInputCreate = popupCreate.querySelector('.popup__input_type_job');

const popupPictureContainer = document.querySelector('.popup_type_picture-background');
const crossButtonPicture = popupPictureContainer.querySelector('.popup__close-icon');
const popupPicture = popupPictureContainer.querySelector('.popup__picture');
const popupPlaceName = popupPictureContainer.querySelector('.popup__place-name');


const popupOpened = document.querySelector('.popup_opened');
const userCardsContainer = document.querySelector('.elements');
const templateCard = document.querySelector('#element').content;
const closeButtons = document.querySelectorAll('.popup__close-icon');

nameInputSaved.value = nameOutputSaved.textContent;
jobInputSaved.value = jobOutputSaved.textContent;





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

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}


closeButtons.forEach((closeButtons) => {
  const popup = closeButtons.closest('.popup');
  closeButtons.addEventListener('click', () => closePopup(popup));
});


function handleFormSubmitSaved(evt) {
  evt.preventDefault();
  nameOutputSaved.textContent = nameInputSaved.value;
  jobOutputSaved.textContent = jobInputSaved.value;
  closePopup(popupSaved);
}



function createCard(item) {
  const cardElement = templateCard.querySelector('.element').cloneNode(true);
  const cardReference = cardElement.querySelector('.element__image');
  const cardText = cardElement.querySelector('.element__text');
  cardText.textContent = item.name;
  cardReference.src = item.link;
  cardReference.alt = item.name;
  const buttonLike = cardElement.querySelector('.element__like-icon');
  buttonLike.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-icon_active');
  });
  const buttonDelete = cardElement.querySelector('.element__bin');
  buttonDelete.addEventListener('click', function (evt) {
    evt.target.closest('.element').classList.add('element_vanished');
  })
  const pictureButton = cardElement.querySelector('.element__image');
  pictureButton.addEventListener('click', function (evt) {
    openPopup(popupPictureContainer);
    popupPicture.src = evt.target.src;
    popupPlaceName.textContent = evt.target.closest('.element').querySelector('.element__text').textContent;
    popupPicture.alt = evt.target.closest('.element').querySelector('.element__text').textContent;
  });
  return cardElement;
}

initialCards.forEach(function (item) {
  const userCard = createCard(item);
  userCardsContainer.append(userCard);
});




function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const item = {
    name: nameInputCreate.value,
    link: placeInputCreate.value
  }
  const cardElement = createCard(item);
  userCardsContainer.prepend(cardElement);
  nameInputCreate.value = null;
  placeInputCreate.value = null;
  closePopup(popupCreate);
}







editButton.addEventListener('click', () => openPopup(popupSaved));
plusButton.addEventListener('click', () => openPopup(popupCreate));
formElementSaved.addEventListener('submit', handleFormSubmitSaved);
formElementCreate.addEventListener('submit', handleCardFormSubmit);


