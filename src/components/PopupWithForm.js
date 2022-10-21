import Popup from "./Popup.js";
export default class PopupWithForm extends Popup{
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._formElement = this._popup.querySelector('.popup__form');
        this._inputList = Array.from(this._formElement.querySelectorAll('.popup__input'));
    }
    _getFormElement() {
        return this._formElement;
    }
    _getInputValues(){
        const formValues = {};
        this._inputList.forEach(input =>formValues[input.name] = input.value);
        return formValues;
    }
    setInputValues(values) {
        this._inputList.forEach((input) => {
            if (values[input.name]) {
                input.value = values[input.name]
            }
        });
    }
    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this.close();
        });
    }
    close() {
        this._formElement.reset();
        super.close();
    }



}