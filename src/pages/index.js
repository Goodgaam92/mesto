import Api from "../components/Api";
import FormValidation from '../components/FormValidation.js';
import Card from '../components/Card.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import {validationConfig} from '../utils/data.js';
import './index.css';
import PopupWithConfirm from "../components/PopupwithConfirm.js";



const editButton = document.querySelector('.profile__edit-button');
const buttonOpenPopupCard = document.querySelector('.profile__add-button');
const buttonOpenAvatarPopup = document.querySelector('.profile__avatar-edit');



const api = new Api({
    baseUrl:"https://mesto.nomoreparties.co/v1/cohort-52",
    headers: {
        authorization: '5b96f81f-348a-4a0c-8154-ec1c076f3bfb',
        "Content-Type": "application/json"
    }
});


const userInfo = new UserInfo('.profile__name','.profile__text', '.profile__avatar');



const popupWithImage = new PopupWithImage('.popup-image');

const popupProfile = new PopupWithForm({
    popupSelector: '.popup-profile',
    handleSubmit: (formData) => {
        popupProfile.loading(true);
        api.setUserInfo(formData)
            .then((res) => {
                userInfo.setUserInfo(res)
                popupProfile.close()
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
            })
            .finally(() => {
                popupProfile.loading(false);
            });
    }
});

const popupPlace = new PopupWithForm({
    popupSelector: '.popup-place',
    handleSubmit: (formData) => {
        popupPlace.loading(true);
        api.addCard(formData)
            .then((res) => {
                section.addItem(addCard(res))
                popupPlace.close()
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
            })
            .finally(() => {
                popupPlace.loading(false);
            });

    }
});

const popupConfirm = new PopupWithConfirm('.popup-accept', (card, cardId)=> {
    api.deleteCard(cardId)
        .then(() => {
            card.deleteCard()
            popupConfirm.close()
        })
        .catch((err) => {
            console.log(`Ошибка: ${err}`);
        })
});

const popupAvatar = new PopupWithForm({
    popupSelector: '.popup-avatar',
    handleSubmit: (formData) => {
        popupAvatar.loading(true);
        api.changeAvatar(formData)
            .then((res) => {
                userInfo.setUserInfo(res)
                popupAvatar.close()
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
            })
            .finally(() => {
                popupAvatar.loading(false);
            });
    }
});


const addCard =(data)=>{
    const newCard = new Card(data, '.template', popupWithImage.open.bind(popupWithImage), deleteButton, putLike, removeLike, userInfo.userId.bind(userInfo));
    return newCard.generateCard();
}
const section = new Section({
    render: (data) => {
        section.addItem(addCard(data));
    }
},'.elements');


function openPopupProfile(){
    popupProfile.open();
    const userData = userInfo.getUserInfo();
    popupProfile.setInputValues(userData);
    formEditValidator.resetValidation();
};
function openPopupPlace(){
    popupPlace.open();
    formAddValidator.resetValidation();

};
function openPopupAvatar(){
    popupAvatar.open();
    formAvatarValidator.resetValidation();
};


function putLike(card, id) {
    api.putLike(id)
        .then((res) => {
            card.setLikeCounter(res)
            card.toggleLike()
        })
        .catch((err) => {
            console.log(`Ошибка: ${err}`);
        });
};

function removeLike(card, id) {
    api.deleteLike(id)
        .then((res) => {
            card.setLikeCounter(res)
            card.toggleLike()
        })
        .catch((err) => {
            console.log(`Ошибка: ${err}`);
        });
};

function deleteButton(card, cardId) {
    popupConfirm.open(card, cardId);
}


const formAddValidator = new FormValidation(validationConfig, popupPlace._getFormElement());
const formEditValidator = new FormValidation(validationConfig, popupProfile._getFormElement());
const formAvatarValidator = new FormValidation(validationConfig,popupAvatar._getFormElement())


Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([userData, cards]) => {
        userInfo.setUserInfo(userData);
        section.renderItems(cards);
        cards.reverse();
        section.renderItems(cards)
    })
    .catch((err) => console.log(err));


buttonOpenPopupCard.addEventListener('click',openPopupPlace);
editButton.addEventListener('click', openPopupProfile);
buttonOpenAvatarPopup.addEventListener('click', openPopupAvatar)


formAvatarValidator.enableValidation()
formAddValidator.enableValidation();
formEditValidator.enableValidation();


popupPlace.setEventListeners();
popupProfile.setEventListeners();
popupWithImage.setEventListeners();
popupAvatar.setEventListeners()
popupConfirm.setEventListeners()



