
import Popup from "./Popup.js";
export default class PopupWithForm extends Popup{
    constructor({popupSelector, handleSubmit}) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._formElement = this._popup.querySelector('.popup__form');
        this._inputList = Array.from(this._formElement.querySelectorAll('.popup__input'));
        this._submitButton = this._popup.querySelector('.popup__submit');
        this._buttonText = this._submitButton.textContent
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
            this._handleSubmit(this._getInputValues());
            this.close()
        });
    }
    loading(isLoading) {
        if (isLoading) {
            this._submitButton.textContent = 'Сохранение...'
        } else {
            this._submitButton.textContent = this._buttonText
        }
    }
    close() {
        this._formElement.reset();
        super.close();
    }



}