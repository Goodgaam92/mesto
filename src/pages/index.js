import FormValidation from '../components/FormValidation.js';
import Card from '../components/Card.js';
import {initialCards} from '../utils/data.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import {validationConfig} from '../utils/data.js';
import './index.css';
const formPlace = document.querySelector('.popup-place__form');
const editButton = document.querySelector('.profile__edit-button');
const buttonOpenPopupCard = document.querySelector('.profile__add-button');


const userInfo = new UserInfo('.profile__name','.profile__text');;
const popupWithImage = new PopupWithImage('.popup-image');
const popupProfile = new PopupWithForm(
    '.popup-profile',({name, job}) =>{
    userInfo.setUserInfo({name, job})});
const popupPlaceOpen = new PopupWithForm(
    '.popup-place', (values) => section.addItem(addCard(values)));

const addCard = function ({name,link}){
    const newCard = new Card({name,link}, '.template',popupWithImage.open.bind(popupWithImage));
    return newCard.generateCard();
}
const section = new Section(
    {
        items:initialCards,
        render:(item) =>section.addItem(addCard(item))},'.elements');

const addPopupPlace = function () {
    formPlace.reset();
    formAddValidator.resetValidation()
    popupPlaceOpen.open();
}
function openPopupProfile() {
    popupProfile.open();
    const userData = userInfo.getUserInfo();
    const {name,job} = userData;
    popupProfile.setInputValues({name,job});
    formEditValidator.resetValidation();
}
const formAddValidator = new FormValidation(validationConfig, popupPlaceOpen._getFormElement());
const formEditValidator = new FormValidation(validationConfig, popupProfile._getFormElement());

buttonOpenPopupCard.addEventListener('click',addPopupPlace);
editButton.addEventListener('click', openPopupProfile);

formAddValidator.enableValidation();
formEditValidator.enableValidation();
popupProfile.setEventListeners();
popupPlaceOpen.setEventListeners();
popupWithImage.setEventListeners();
section.renderItems();




