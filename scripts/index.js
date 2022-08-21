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
let elements = document.querySelector('.elements');
let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = popup.querySelector('.popup__close-button');
let inputJob = document.querySelector('.popup__input_type_job');
let profileText = document.querySelector('.profile__text');
let inputName = document.querySelector('.popup__input_type_name');
let profileName = document.querySelector('.profile__name');
let saveButton = document.querySelector('.popup__save-button');
let editPlaceButton = document.querySelector('.profile__add-button');
let form = document.querySelector('.popup__form');
let formd =document.querySelector('.popup__formd');
let elementImg = elements.querySelector('.element__mask-group');
let elementName = elements.querySelector('.element__place');

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

const addPlacePopup = function () {
    form.classList.add('popup__formd');
    form.classList.remove('popup__form');
    let popupTitle = popup.querySelector('.popup__title').textContent = 'Новое Место';
    let createButton = popup.querySelector('.popup__save-button').textContent = 'Создать';
    inputName.value = 'Название';
    inputJob.value = 'Ссылка на картинку';
    popup.classList.add('popup_opened');

}


initialCards.forEach(function (el) {
    elementName.textContent = el.name;
    elementImg.src = el.link;
});


function changePlace (evt) {
    evt.preventDefault();
    elementName.textContent = inputName.value;
    elementImg.src = inputJob.value;
    removePopup ();
}



editPlaceButton.addEventListener('click',addPlacePopup);
closeButton.addEventListener('click', removePopup);
editButton.addEventListener('click', addPopup);
form.addEventListener('submit', change);
formd.addEventListener('submit', changePlace);


