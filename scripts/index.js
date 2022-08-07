console.log('Hello>world');

let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = popup.querySelector('.popup__close-button');

let addPopup = function () {
    popup.classList.add('popup_opened');
}

let removePopup = function () {
    popup.classList.remove('popup_opened');


}
closeButton.addEventListener('click', removePopup);
editButton.addEventListener('click', addPopup);

let inputName = document.querySelector('.popup__input-name');
let profileName = document.querySelector('.profile__name');
let saveButton = document.querySelector('.popup__save-button');

let changeName = function () {
    profileName.textContent = inputName.value;
}

let inputJob = document.querySelector('.popup__input-job');
let profileText = document.querySelector('.profile__text');
let changeText = function () {
    profileText.textContent = inputJob.value;
}

saveButton.addEventListener('click', changeName,);
saveButton.addEventListener('click', changeText);