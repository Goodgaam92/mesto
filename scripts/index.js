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


let inputJob = document.querySelector('.popup__input_type_job');
let profileText = document.querySelector('.profile__text');
let inputName = document.querySelector('.popup__input_type_name');
let profileName = document.querySelector('.profile__name');
let form = document.querySelector('.popup__form');

let popupPlace = document.querySelector('.popup-place');
let templateElement = document.querySelector('.template');
let elements = document.querySelector('.elements');

let editButton = document.querySelector('.profile__edit-button');
let closeButton = popup.querySelector('.popup__close-button');
let closePlaceButton = popupPlace.querySelector('.popup-place__close-button');
let editPlaceButton = document.querySelector('.profile__add-button');
let inputPlace = document.querySelector('.popup-place__input_type_name');
let inputPlaceImg = document.querySelector('.popup__input_type_img');
const newItemElement =templateElement.content.cloneNode(true);
let placeName = newItemElement.querySelector('.element__place');
let placeImg = newItemElement.querySelector('.element__mask-group');
let formPlace = document.querySelector('.popup-place__form');
let deleteButton = newItemElement.querySelector('.delete-button');


// Попап Изменения данных пользователя
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
//Попап добавления карточек из массива
let addPopupPlace = function () {
    popupPlace.classList.add('popup-place_opened');

}
initialCards.forEach(function (el){
    const newItemElement =templateElement.content.cloneNode(true);
    newItemElement.querySelector('.element__place').textContent = el.name;
    newItemElement.querySelector('.element__mask-group').src = el.link;
    elements.append(newItemElement);
})
function deleteCard(evt) {
    const element = evt.target.closest('.element');
    element.remove();
}
// функция добавления пользовательских карточек
let addCard = function (evt){
    evt.preventDefault();
    placeName.textContent = inputPlace.value;
    placeImg.src = inputPlaceImg.value;
    elements.prepend(newItemElement);
    removePopupPlace();
}
let removePopupPlace = function () {
    popupPlace.classList.remove('popup-place_opened');
}
function deleteHandle(evt) {
    const element = evt.target.closest('.element');
    element.remove();
}

//Вызовы
closePlaceButton.addEventListener('click',removePopupPlace);
editPlaceButton.addEventListener('click',addPopupPlace);
closeButton.addEventListener('click', removePopup);
editButton.addEventListener('click', addPopup);
formPlace.addEventListener('submit', addCard);
form.addEventListener('submit', change);
deleteButton.addEventListener('click', deleteCard);




