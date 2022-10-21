export default class Popup {
    constructor(popupSelector){
        this._popup = document.querySelector(popupSelector);
    }
    _pressEscapeHandler=(evt)=>{
        if (evt.key === 'Escape') {
            this.close()
        }
    }
    open(){
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown',this._pressEscapeHandler);
    }

    close(){
        this._popup.classList.remove('popup_opened');
        document.addEventListener('keydown',this._pressEscapeHandler);
    }
    setEventListeners(){

        this._popup.addEventListener('mousedown', (evt) => {
            if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close-button')) {
                this.close()
            };
        });
    }

}