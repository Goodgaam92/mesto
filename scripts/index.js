
let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = popup.querySelector('.popup__close-button');
let inputJob = document.querySelector('.popup__input_type_job');
let profileText = document.querySelector('.profile__text');
let inputName = document.querySelector('.popup__input_type_name');
let profileName = document.querySelector('.profile__name');
let saveButton = document.querySelector('.popup__save-button');
let form = document.querySelector('.popup__form');

let addPopup = function () {
    popup.classList.add('popup_opened');
    inputName.value = profileName.textContent;
    inputJob.value = profileText.textContent;
}
let removePopup = function () {
    popup.classList.remove('popup_opened');
}
 function change (evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileText.textContent = inputJob.value;
    removePopup ();

   
}
closeButton.addEventListener('click', removePopup);
editButton.addEventListener('click', addPopup);
form.addEventListener('submit', change);

