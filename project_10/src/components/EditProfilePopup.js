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
          onChange={(event) => setName(event.target.value)}
          value={name}
          id="name-input"
          type="text"
          className="form__input form__input_type_name"
          name="profileFormNameInput"
          required
          minLength="2"
          maxLength="40"
        />
        <span id="name-input-error" className="form__input-error"></span>
        <input
          onChange={(event) => setDescription(event.target.value)}
          value={description}
          id="title-input"
          type="text"
          className="form__input form__input_type_title"
          name="profileFormTitleInput"
          required
          minLength="2"
          maxLength="200"
        />
        <span id="title-input-error" className="form__input-error"></span>
      </PopupWithForm>
    </div>
  );
}
