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
    <div className={`popup popup_type_preview ${card ? 'popup_active' : ''}`} onMouseDown={onPopupClick}>
      <div className="popup__window popup__window_type_preview">
        <button type="button" className="popup__close-button" aria-label="close" onClick={onClose}></button>
        <img src={popupImageLink} alt="preview" className="popup__preview-image" />
        <p className="popup__description">{popupImageName}</p>
      </div>
    </div>
  );
}
