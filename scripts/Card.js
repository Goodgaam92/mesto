import {pressEscapeHandler} from "./index.js";
import {popupImg} from "./index.js";
export default class Card  {
    constructor(data, templateSelector ){
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._popupImgImage = document.querySelector('.popup-image__image');
        this._popupCaption = document.querySelector('.popup-image__caption');
        this._popupImg = popupImg;
    }
    _handleOpenPopup(){

        this._popupImgImage.src = this._link;
        this._popupCaption.textContent = this._name;
        this._popupImg.classList.add('popup_opened');
        document.addEventListener("keydown", pressEscapeHandler);
    }
    _handleClosePopup(){
        this._popupImgImage.src = '';
        this._popupImg.classList.remove('popup_opened');
        document.removeEventListener('keydown',pressEscapeHandler);
    }
    _setEventListeners(){

        this._element.querySelector('.element__mask-group').addEventListener('click', () =>{
            this._handleOpenPopup();
        })
        this._closeImgFull = document.querySelector('.popup-image__close-button');
        this._closeImgFull.addEventListener('click', () =>{
            this._handleClosePopup()
        })
    }
    _getTemplate(){
        const cardElement = document.querySelector('.template')
            .content
            .querySelector('.element')
            .cloneNode(true);
        return cardElement
    }
    _button(){
        const likeButton = this._element.querySelector('.like')
        const deleteButton = this._element.querySelector('.delete-button')
        likeButton.addEventListener('click', function (evt) {
            likeButton.classList.toggle('like_activated')
        });

        deleteButton.addEventListener("click", function (evt) {
            deleteButton.closest(".element").remove()
        });

    }
    generateCard(){
        this._element = this._getTemplate();
        this._setEventListeners();
        this._button();
        this._element.querySelector('.element__place').textContent = this._name;
        this._element.querySelector('.element__mask-group').src = this._link;
        return this._element;

    }
}