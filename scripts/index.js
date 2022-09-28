import FormValidation from "./FormValidation.js";
import Card from "./Card.js";
import { initialCards} from "./data.js";


const popupProfile = document.querySelector('.popup-profile');
const popupPlace = document.querySelector('.popup-place');
const profileCloseButton = popupProfile.querySelector('.popup__close-button');
const inputName = document.querySelector('.popup__input_type_name');
const form = document.querySelector('.popup__form');
const inputJob = document.querySelector('.popup__input_type_job');
const buttonChange = document.querySelector('.popup__submit');

const profileText = document.querySelector('.profile__text');
const profileName = document.querySelector('.profile__name');
const editButton = document.querySelector('.profile__edit-button');
const buttonOpenPopupCard = document.querySelector('.profile__add-button');

const templateElement = document.querySelector('.template');

const placeCloseButton = popupPlace.querySelector('.popup-place__close-button');
const inputPlaceImg = document.querySelector('.popup__input_type_img');
const inputPlace = document.querySelector('.popup__input_type_place');
const formPlace = document.querySelector('.popup-place__form');
const popupImg = document.querySelector('.popup-image');
const popupImgImage = popupImg.querySelector('.popup-image__image');
const popupCaption = popupImg.querySelector('.popup-image__caption');
const closeImgFull = popupImg.querySelector('.popup-image__close-button');
const elements = document.querySelector('.elements');
const placeSaveButton = document.querySelector('.popup-place__save-button');

function handleOpenPopup(name, link) {
    popupImgImage.src = link;
    popupImgImage.alt = name;
    popupCaption.textContent = name;
    openPopup(popupImg);
}
function handleClosePopup(){
    popupImgImage.src = '';
    closePopup(popupImg);
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener("keydown", pressEscapeHandler);

}
function closePopup(popup){
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown',pressEscapeHandler);

}
export const pressEscapeHandler =(evt)=>{
    if (evt.key === 'Escape') {
        const activePopup = document.querySelector('.popup_opened');
        if (activePopup) {
            closePopup(activePopup);
        } else {
            document.removeEventListener('keydown', pressEscapeHandler);
        }
    }
}
function changeUserProfile (evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileText.textContent = inputJob.value;
    closePopup(popupProfile);
}

const addPopup = function () {
    inputName.value = profileName.textContent;
    inputJob.value = profileText.textContent;
    formEditValidator.toggleButtonState();
    openPopup(popupProfile);

}

const addPopupPlace = function () {
    formPlace.reset();
    formAddValidator.toggleButtonState();
    openPopup(popupPlace);

}

const removePopupProfile = function () {
    closePopup(popupProfile);
}

const removePopupPlace = function () {
    closePopup(popupPlace);
}

const addCard = function (name,link){
    const newCard = new Card({name,link}, '.template',handleOpenPopup,handleClosePopup);
    return newCard.generateCard();
}
const placeCard = function (card){
    elements.append(card);
}
const createCard = function (evt){
    evt.preventDefault();
    const card = addCard(inputPlace.value, inputPlaceImg.value);
    elements.prepend(card);
    closePopup(popupPlace);
}


initialCards.forEach((item) => {
   const card = addCard(item.name,item.link);
    placeCard(card);
});
const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    formFieldset: '.popup__fieldset',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'button_inactive',
    inputErrorClass: 'popup__input_type-error',
    errorClass: 'popup__form__input-error_active'
};
const formAddValidator = new FormValidation(validationConfig, popupPlace);
const formEditValidator = new FormValidation(validationConfig, popupProfile);
formAddValidator.enableValidation();
formEditValidator.enableValidation();


placeCloseButton.addEventListener('click',removePopupPlace);
buttonOpenPopupCard.addEventListener('click',addPopupPlace);
profileCloseButton.addEventListener('click', removePopupProfile);
editButton.addEventListener('click', addPopup);
formPlace.addEventListener('submit', createCard);
form.addEventListener('submit', changeUserProfile);


popupProfile.addEventListener('click',function (evt){
    if(evt.target === popupProfile ) {
        closePopup(popupProfile);
    };
});
popupPlace.addEventListener('click',function (evt){
    if(evt.target === popupPlace ) {
        closePopup(popupPlace);
    };
});
popupImg.addEventListener('click',function (evt){
    if(evt.target === popupImg ) {
        closePopup(popupImg);
    };
});





