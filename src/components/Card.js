export default class Card  {
    constructor(data, templateSelector, handleOpenPopup, deleteButton, putLike, removeLike, userId){
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._cardId = data._id;
        this._owner = data.owner;
        this._getUserId = userId;
        this._templateSelector = templateSelector;
        this._handleOpenPopup = handleOpenPopup;
        this._handleDeleteClick = deleteButton
        this._handlePutLike = putLike
        this._handleDeleteLike = removeLike

    }
    _getTemplate(){
        const cardElement = document.querySelector(this._templateSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);
        return cardElement
    }

    isLiked() {
        return this._likes.some( (like) =>
            like._id === this._getUserId())
    }
    setLikeCounter(res) {
        this._likeNumber.textContent = res.likes.length
    }
    toggleLike() {
        this._likeButton.classList.toggle('like_activated');
    }
    _handleLikeClick() {
        if (!this._likeButton.classList.contains('like_activated')) {
            this._handlePutLike(this, this._cardId)
        } else {
            this._handleDeleteLike(this, this._cardId)
        }
    }
    _handleClickImage(){
        this._handleOpenPopup({
            name: this._name,
            link: this._link
        });
    }
    generateCard(){
        this._element = this._getTemplate();

        this._cardImage = this._element.querySelector('.element__mask-group')
        this._cardimagetitle = this._element.querySelector('.element__place');
        this._likeButton = this._element.querySelector('.like');
        this._deleteButton = this._element.querySelector('.delete-button');
        this._likeNumber = this._element.querySelector('.element__like-counter')

        this._cardimagetitle.textContent = this._name;
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;

        if (!(this._owner._id == this._getUserId())) {
            this._deleteButton.remove()
        }
        this._likeNumber.textContent = this._likes.length;
        if (this.isLiked()) {
            this._likeButton.classList.add('button_active');
        }
        this._setEventListeners();
        return this._element;
    }
    _setEventListeners(){

        this._likeButton.addEventListener("click", () =>
            this._handleLikeClick()
        );
        this._deleteButton.addEventListener('click', () => {
            this._handleDeleteClick(this, this._cardId);
        })
        this._cardImage.addEventListener('click', () => {
            this._handleClickImage();
        })
    }
    deleteCard() {
        this._element.remove();
        this._element = null;
    }

}