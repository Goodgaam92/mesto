export default class Card  {
    constructor(data, templateSelector,handleOpenPopup){
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleOpenPopup = handleOpenPopup;

    }
    _getTemplate(){
        const cardElement = document.querySelector(this._templateSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);
        return cardElement
    }


    _handleClickImage(){
        this._handleOpenPopup({
            name: this._name,
            link: this._link
        });
    }
    _handleLikeButton () {
        this._likeButton.classList.toggle('like_activated')
    };

    _handleDeleteButton (){
        this._element.remove();
        this._element = null;
    };

    generateCard(){
        this._element = this._getTemplate();
        this._setEventListeners();
        this._cardimagetitle = this._element.querySelector('.element__place');
        this._cardimagetitle.textContent = this._name;
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;

        return this._element;
    }
    _setEventListeners(){
        this._likeButton = this._element.querySelector('.like');
        this._deleteButton = this._element.querySelector('.delete-button');
        this._cardImage = this._element.querySelector('.element__mask-group')
        this._likeButton.addEventListener("click", () =>
            this._handleLikeButton ()
        );
        if (this._deleteButton){
            this._deleteButton.addEventListener("click", () =>
                this._handleDeleteButton()
            )
        }
        this._cardImage.addEventListener('click', () =>{
            this._handleClickImage();
        })
    }

}