import Popup from "./Popup.js";
export default class PopupWithImage extends Popup{
    constructor(popupSelector){
        super(popupSelector);
        this._element = this._popup.querySelector('.popup-image__image');
        this._caption = this._popup.querySelector('.popup-image__caption');
    }
    open({name,link}){
        super.open();
        this._element.src = link;
        this._element.alt = name;
        this._caption.textContent = name;
    }
}