
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close-button');
const inputName = document.querySelector('.popup__input_type_name');
const form = document.querySelector('.popup__form');
const inputJob = document.querySelector('.popup__input_type_job');
const buttonChange = document.querySelector('.popup__submit');

const profileText = document.querySelector('.profile__text');
const profileName = document.querySelector('.profile__name');
const editButton = document.querySelector('.profile__edit-button');
const buttonOpenPopupCard = document.querySelector('.profile__add-button');

const templateElement = document.querySelector('.template');
const popupPlace = document.querySelector('.popup-place');
const closePlaceButton = popupPlace.querySelector('.popup-place__close-button');
const inputPlaceImg = document.querySelector('.popup-place__input_type_img');
const inputPlace = document.querySelector('.popup-place__input_type_name');
const formPlace = document.querySelector('.popup-place__form');
const popupImg = document.querySelector('.popup-image');
const popupImgImage = popupImg.querySelector('.popup-image__image');
const popupCaption = popupImg.querySelector('.popup-image__caption');
const closeImgFull = popupImg.querySelector('.popup-image__close-button');
const elements = document.querySelector('.elements');

function createNewCard(name, link) {
    const newItemElement = templateElement.content.cloneNode(true);
    const placeImg = newItemElement.querySelector('.element__mask-group');
    const placeName = newItemElement.querySelector('.element__place');
    const deleteButton = newItemElement.querySelector('.delete-button');
    const fullImage = placeImg;
    const likeButton =newItemElement.querySelector('.like');
    placeImg.src = link;
    placeImg.alt = name;
    placeName.textContent = name;
    fullImage.addEventListener("click", function (evt) {
        popupImageFull(link, placeName.textContent);
    });

    likeButton.addEventListener('click', function (evt) {
        likeButton.classList.toggle('like_activated')
    });

    deleteButton.addEventListener("click", function (evt) {
        deleteButton.closest(".element").remove()
});
    return newItemElement;
}


function openPopup(popup) {
    popup.classList.add('popup_opened');

}
function closePopup(popup){
    popup.classList.remove('popup_opened');

}


const popupImageFull =function(link, caption) {
    popupImgImage.src = link;
    popupImgImage.alt = caption;
    popupCaption.textContent = caption;
    addPopupImg(popupImgImage);
    openPopup(popupImg);
}


function changeUserProfile (evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileText.textContent = inputJob.value;
    closePopup(popup);
}
const addPopupImg = function(){
    openPopup(popupImg);
};
const addPopup = function () {
    inputName.value = profileName.textContent;
    inputJob.value = profileText.textContent;
    openPopup(popup);
    buttonChange.classList.remove('button_inactive');
}
const addPopupPlace = function () {
    openPopup(popupPlace);

}
const removeImgPopup = function () {
    closePopup(popupImg);
}

const removePopup = function () {
    closePopup(popup);
}
const removePopupPlace = function () {
    closePopup(popupPlace);
}

const addCard = function (evt){
    evt.preventDefault();
    const card = createNewCard(inputPlace.value, inputPlaceImg.value);
    elements.prepend(card);
    closePopup(popupPlace);
}

initialCards.forEach((el) => {
    elements.append(createNewCard(el.name, el.link));
});

//Вызовы
closeImgFull.addEventListener('click', removeImgPopup);
closeImgFull.addEventListener('keydown', removeImgPopup);
closePlaceButton.addEventListener('click',removePopupPlace);
buttonOpenPopupCard.addEventListener('click',addPopupPlace);
closeButton.addEventListener('click', removePopup);
editButton.addEventListener('click', addPopup);
formPlace.addEventListener('submit', addCard);
form.addEventListener('submit', changeUserProfile);
document.addEventListener('keydown', function(evt) {
    const key = evt.key;
    if (key === "Escape") {
        closePopup(popup);
        closePopup(popupPlace);
        closePopup(popupImg);
    }
});
popup.addEventListener('click',function (evt){
    if(evt.target === popup ) {
        closePopup(popup);
    };
});
popupPlace.addEventListener('click',function (evt){
    if(evt.target === popupPlace ) {
        closePopup(popupPlace);
    };
});
popupImg.addEventListener('click',function (evt){
    if(evt.target === popupImg ) {
        closePopup(popupImg);
    };
});





