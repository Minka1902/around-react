// ! buttons
export const editButton = document.querySelector(".profile__edit-button");
export const addButton = document.querySelector(".profile__add-button");
export const avatarButton = document.querySelector(".profile__image-button");

// ! forms
export const editFormElement = document.getElementById("editform");
export const addFormElement = document.getElementById("addform");
export const avatarFormElement = document.getElementById("avatarform");
export const formSettings = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_invalid",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error-massage_visible"
};

// ! inputs
export const avatarUrlInput = document.getElementById("avatar");
export const nameInput = document.getElementById("popupname");
export const jobInput = document.getElementById("popupaboutme");

// !input help
export const titleInput = document.getElementById("title");
export const imageLinkInput = document.getElementById("imagelink");


// ! api
export const apiOptions = {
    baseUrl: "https://around.nomoreparties.co/v1/group-12",
    headers: {
        authorization: "614bb6fa-36a6-4d24-9b95-72bf17bccf61",
        "Content-Type": "application/json"
    }
}

// ! section
export const cardsData = [];