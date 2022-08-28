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
let closeButton = popup.querySelector('.popup__close-button');
let inputName = document.querySelector('.popup__input_type_name');
let form = document.querySelector('.popup__form');
let inputJob = document.querySelector('.popup__input_type_job');


let profileText = document.querySelector('.profile__text');
let profileName = document.querySelector('.profile__name');
let editButton = document.querySelector('.profile__edit-button');
let editPlaceButton = document.querySelector('.profile__add-button');

let templateElement = document.querySelector('.template');
let popupPlace = document.querySelector('.popup-place');
let closePlaceButton = popupPlace.querySelector('.popup-place__close-button');
let inputPlaceImg = document.querySelector('.popup-place__input_type_img');
let inputPlace = document.querySelector('.popup-place__input_type_name');
let formPlace = document.querySelector('.popup-place__form');
let popupImg = document.querySelector('.popup-image');
let popupImgImage = popupImg.querySelector('.popup-image__image');
let popupCaption = popupImg.querySelector('.popup-image__caption');
let closeImgFull = popupImg.querySelector('.popup-image__close-button');

let elements = document.querySelector('.elements');

function createNewCard(name, link) {
    const newItemElement = templateElement.content.cloneNode(true);
    const placeImg = newItemElement.querySelector('.element__mask-group');
    const placeName = newItemElement.querySelector('.element__place');
    const deleteButton = newItemElement.querySelector('.delete-button');
    const fullImage = newItemElement.querySelector(".element__mask-group");
    const likeButton =newItemElement.querySelector('.like');
    placeImg.src = link;
    placeName.textContent = name;
    fullImage.addEventListener("click", function (evt) {
        popupImageFull(link, placeName.textContent);
    });
    likeButton.addEventListener('click', function (evt) {
        likeButton.classList.toggle('like_activated')
    });
    fullImage.addEventListener('click', function (evt) {

    })

    deleteButton.addEventListener("click", function (evt) {
        deleteButton.closest(".element").remove()
});
    return newItemElement;
}
let addPopupImg = function(){
    popupImg.classList.toggle('popup-image_opened');
};
let popupImageFull =function(link, caption) {
    popupImgImage.src = link;
    popupCaption.textContent = caption;
    addPopupImg(popupImgImage);
}

let addPopup = function () {
    popup.classList.add('popup_opened');
    inputName.value = profileName.textContent;
    inputJob.value = profileText.textContent;
}
function change (evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileText.textContent = inputJob.value;
    removePopup ();
}
let removeImgPopup = function () {
    popupImg.classList.remove('popup-image_opened');
}

let removePopup = function () {
    popup.classList.remove('popup_opened');
}


let addPopupPlace = function () {
    popupPlace.classList.add('popup-place_opened');

}

initialCards.forEach((el) => {
    elements.append(createNewCard(el.name, el.link));
});


let addCard = function (evt){
    evt.preventDefault();
    const card = createNewCard(inputPlace.value, inputPlaceImg.value);
    elements.prepend(card);
    removePopupPlace();
}
let removePopupPlace = function () {
    popupPlace.classList.remove('popup-place_opened');
}

//Вызовы
closeImgFull.addEventListener('click', removeImgPopup);
closePlaceButton.addEventListener('click',removePopupPlace);
editPlaceButton.addEventListener('click',addPopupPlace);
closeButton.addEventListener('click', removePopup);
editButton.addEventListener('click', addPopup);
formPlace.addEventListener('submit', addCard);
form.addEventListener('submit', change);





