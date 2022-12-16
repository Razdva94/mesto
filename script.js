let main = document.querySelector('.main');
let editButton = main.querySelector('.profile__button-container');
let popup = main.querySelector('.popup');
let cross = popup.querySelector('.popup__close-icon');

function popupOpenClose(){
  popup.classList.toggle('popup_opened');
}
editButton.addEventListener('click', popupOpenClose);
cross.addEventListener('click', popupOpenClose);