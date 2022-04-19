import React from 'react';

export default function ImagePopup(props) {
  const { onClose, card, onPopupClick } = props;
  const [popupImageLink, setPopupImageLink] = React.useState('');
  const [popupImageName, setPopupImageName] = React.useState('');

  React.useEffect(() => {
    if (card) {
      setPopupImageLink(card.link);
      setPopupImageName(card.name);
    }
  }, [card]);

  return (
    <div className={`popup popup_type_preview ${card ? 'popup_opened' : ''}`} onMouseDown={onPopupClick}>
      <div className="popup__image-container">
        <button className="popup__close-button" type="button" aria-label="close" onClick={onClose}></button>
        <img className="popup__image" src={popupImageLink} alt="preview" />
        <p className="popup__text">{popupImageName}</p>
      </div>
    </div>
  );
}
