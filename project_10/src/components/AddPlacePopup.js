import PopupWithForm from './PopupWithForm';
import React from 'react';

export default function AddPlacePopup(props) {
  const { isOpen, onClose, onAddPlaceSubmit, buttonText, onPopupClick } = props;
  const [cardName, setCardName] = React.useState('');
  const [cardLink, setCardLink] = React.useState('');

  React.useEffect(() => {
    setCardName('');
    setCardLink('');
  }, [isOpen]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddPlaceSubmit({ name: cardName, link: cardLink });
  };

  return (
    <div onMouseDown={onPopupClick}>
      <PopupWithForm onSubmit={handleSubmit} name="new-card" title="New place" isOpen={isOpen} onClose={onClose} buttonText={buttonText}>
        <input
          className="popup__input"
          onChange={(event) => setCardName(event.target.value)}
          value={cardName}
          id="image-title-input"
          type="text"
          placeholder="Title"
          name="newCardFormImageTitleInput"
          required
          minLength="1"
          maxLength="30"
        />
        <h4 className="popup__error-massage avatar-error" id="image-title-input-error"></h4>
        <input
          className="popup__input"
          onChange={(event) => setCardLink(event.target.value)}
          value={cardLink}
          id="image-link-input"
          type="url"
          placeholder="Image link"
          name="newCardFormImageLinkInput"
          required
        />
        <h4 className="popup__error-massage avatar-error" id="image-link-input-error"></h4>
      </PopupWithForm>
    </div>
  );
}
