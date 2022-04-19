import PopupWithForm from './PopupWithForm';
import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

export default function EditProfilePopup(props) {
  const { isOpen, onClose, onUpdateUser, buttonText, onPopupClick } = props;
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    if (currentUser.name && currentUser.about) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [currentUser, isOpen]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdateUser({ name, about: description });
  };

  return (
    <div onMouseDown={onPopupClick}>
      <PopupWithForm name="profile" title="Edit profile" onSubmit={handleSubmit} isOpen={isOpen} onClose={onClose} buttonText={buttonText}>
        <input
          className="popup__input"
          onChange={(event) => setName(event.target.value)}
          value={name}
          id="name-input"
          type="text"
          name="profileFormNameInput"
          required
          minLength="2"
          maxLength="40"
        />
        <h4 className="popup__error-massage popupaboutme-error" id="name-input-error"></h4>
        <input
          className="popup__input"
          onChange={(event) => setDescription(event.target.value)}
          value={description}
          id="title-input"
          type="text"
          name="profileFormTitleInput"
          required
          minLength="2"
          maxLength="200"
        />
        <h4 className="popup__error-massage popupaboutme-error" id="title-input-error"></h4>
      </PopupWithForm>
    </div>
  );
}
