import PopupWithForm from './PopupWithForm';
import React from 'react';

export default function EditAvatarPopup(props) {
  const imageInput = React.createRef();
  const { isOpen, onClose, onUpdateAvatar, buttonText, onPopupClick } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdateAvatar(imageInput.current.value);
  };

  React.useEffect(() => {
    imageInput.current.value = '';
  }, [isOpen, imageInput]);

  return (
    <div onMouseDown={onPopupClick}>
      <PopupWithForm
        onSubmit={handleSubmit}
        name="profile-image"
        title="Change profile picture"
        isOpen={isOpen}
        onClose={onClose}
        buttonText={buttonText}
      >
        <input
          className="popup__input"
          ref={imageInput}
          id="profile-image-input"
          type="url"
          placeholder="Link to new profile image"
          name="profileImageUrlInput"
          required
          minLength="1"
        />
        <h4 className="popup__error-massage avatar-error" id="profile-image-input-error"></h4>
      </PopupWithForm>
    </div>
  );
}