export default function PopupWithForm(props) {
  const { name, title, onSubmit, children, buttonText, isOpen, onClose } = props;
  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_active' : ''}`}>
      <div className="popup__window">
        <button type="button" className="popup__close-button" aria-label="close" onClick={onClose}></button>
        <h2 className="popup__title">{title}</h2>
        <form onSubmit={onSubmit} className={`form form_${name}`} name={name}>
          {children}
          <button type="submit" className="button form__submit-button form__submit-button_place_profile">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
