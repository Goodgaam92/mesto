import Api from "../components/Api";
import FormValidation from '../components/FormValidation.js';
import Card from '../components/Card.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import {validationConfig} from '../utils/data.js';
import './index.css';

const api = new Api({
    baseUrl:"https://mesto.nomoreparties.co/v1/cohort-52",
    headers: {
        authorization: '5b96f81f-348a-4a0c-8154-ec1c076f3bfb',
        "Content-Type": "application/json"
    }
})
const formPlace = document.querySelector('.popup-place__form');
const editButton = document.querySelector('.profile__edit-button');
const buttonOpenPopupCard = document.querySelector('.profile__add-button');
const buttonOpenAvatarPopup = document.querySelector('.profile-avatar__edit-button')
const avatarPopup = document.querySelector('.popup-avatar');

const userInfo = new UserInfo('.profile__name','.profile__text');
const popupWithImage = new PopupWithImage('.popup-image');
const popupProfile = new PopupWithForm(
    '.popup-profile',({name, about}) =>{
    userInfo.setUserInfo({name, about})});
const popupPlaceOpen = new PopupWithForm(
    '.popup-place', (values) => section.addItem(addCard(values)));

const addCard = function ({name,link,likes,userId,ownerId}){
    const newCard = new Card({name,link,likes,userId,ownerId},
        '.template',popupWithImage.open.bind(popupWithImage)
    );
    return newCard.generateCard();
}
const section = new Section({render: (data)=>{
    const card = addCard(data);
    section.addItem(card)
    }},'.elements');

const openPopupPlace = function () {
    formPlace.reset();
    formAddValidator.resetValidation()
    popupPlaceOpen.open();
}
function openPopupProfile() {
    popupProfile.open();
    const userData = userInfo.getUserInfo();
    const {name,about} = userData;
    popupProfile.setInputValues({name,about});
    formEditValidator.resetValidation();
}
const formAddValidator = new FormValidation(validationConfig, popupPlaceOpen._getFormElement());
const formEditValidator = new FormValidation(validationConfig, popupProfile._getFormElement());

buttonOpenPopupCard.addEventListener('click',openPopupPlace);
editButton.addEventListener('click', openPopupProfile);
buttonOpenAvatarPopup.addEventListener('click',()=>avatarPopup.classList.add('popup_opened'))
formAddValidator.enableValidation();
formEditValidator.enableValidation();
popupProfile.setEventListeners();
popupPlaceOpen.setEventListeners();
popupWithImage.setEventListeners();


function initialRender() {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
        .then(([userData, cards]) => {
            userInfo.setUserInfo(userData);
            section.renderItems(cards);
        })
        .catch((err) => console.log(err));
}
initialRender();

