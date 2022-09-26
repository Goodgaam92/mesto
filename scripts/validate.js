export default class FormValidation{
    constructor(config,element) {
        this._formSelector = config.formSelector;
        this._inputSelector = config.inputSelector;
        this._formFieldset = config.formFieldset;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
        this._element = element;
        this._buttonElement = this._element.querySelector(this._submitButtonSelector);
        this._formList = Array.from(document.querySelectorAll(this._formSelector));
        this._fieldsetList = Array.from(this._element.querySelectorAll(this._formFieldset));
        this._inputList = Array.from(this._element.querySelectorAll(this._inputSelector));
    };


_showInputError( inputElement)  {
    const errorElement = this._element.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._errorClass);

};

_hideInputError (inputElement) {
    const errorElement = this._element.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
};
_isValid (inputElement){
    if (!inputElement.validity.valid) {
        this._showInputError(inputElement);
    } else {
        this._hideInputError(inputElement);
    }
}


_hasInvalidInput(){
    return this._inputList.some((inputElement) =>{
        return !inputElement.validity.valid;
    });

};

_toggleButtonState(){
    if(this._hasInvalidInput()){
        this._buttonElement.setAttribute("disabled",'');
        this._buttonElement.classList.add( this._inactiveButtonClass)
    }
    else {
        this._buttonElement.removeAttribute("disabled");
        this._buttonElement.classList.remove( this._inactiveButtonClass)
    }
    };

    enableValidation () {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement);
                this._toggleButtonState();
            });
        });
    };


}


