export default class Card  {
    constructor(data, templateSelector,handleOpenPopup,handleClosePopup ){
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleOpenPopup = handleOpenPopup;
        this._handleClosePopup = handleClosePopup;
    }
    _handleLikeButton () {
        this._likeButton.classList.toggle('like_activated')
    };

    _handleDeleteButton (){
        this._element.remove();
        this._element = null;
    };
    _setEventListeners(){
        this._likeButton = this._element.querySelector('.like');
        this._deleteButton = this._element.querySelector('.delete-button');
        this._likeButton.addEventListener("click", () =>
            this._handleLikeButton ()
        );
        this._deleteButton.addEventListener("click", () =>
            this._handleDeleteButton()
        );
        this._element.querySelector('.element__mask-group').addEventListener('click', () =>{
            this._handleOpenPopup(this._name, this._link);
        })

    }
    _getTemplate(){
        const cardElement = document.querySelector(this._templateSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);
        return cardElement
    }
    generateCard(){
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector('.element__place').textContent = this._name;
        this._element.querySelector('.element__mask-group').src = this._link;
        this._element.querySelector('.element__mask-group').alt = this._name;
        return this._element;

    }
}