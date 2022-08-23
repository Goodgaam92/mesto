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
let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = popup.querySelector('.popup__close-button');
let inputJob = document.querySelector('.popup__input_type_job');
let profileText = document.querySelector('.profile__text');
let inputName = document.querySelector('.popup__input_type_name');
let profileName = document.querySelector('.profile__name');
let editPlaceButton = document.querySelector('.profile__add-button');
let form = document.querySelector('.popup__form');
let popupPlace = document.querySelector('.popup-place');
let closePlaceButton = popupPlace.querySelector('.popup-place__close-button');
let templateElement = document.querySelector('.template');
let elements = document.querySelector('.elements');
let elementPlace = templateElement.querySelector('.element__place');
let inputPlace = document.querySelector('.popup-place__input_type_name');


let addPopup = function () {
    popup.classList.add('popup_opened');
    inputName.value = profileName.textContent;
    inputJob.value = profileText.textContent;
}
let removePopup = function () {
    popup.classList.remove('popup_opened','popup-place_opened');
}
 function change (evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileText.textContent = inputJob.value;
    removePopup ();
}
let addPopupPlace = function () {
    popupPlace.classList.add('popup-place_opened');

}
function addCard() {
    const newItemElement =templateElement.content.cloneNode(true);
    initialCards.forEach(function (el) {
    newItemElement.querySelector('.element__place').textContent = el.name});
    elements.prepend(newItemElement);
}
let removePopupPlace = function () {
    popupPlace.classList.remove('popup-place_opened');
}











addCard();
closePlaceButton.addEventListener('click',removePopupPlace);
editPlaceButton.addEventListener('click',addPopupPlace);
closeButton.addEventListener('click', removePopup);
editButton.addEventListener('click', addPopup);
form.addEventListener('submit', change);

;


