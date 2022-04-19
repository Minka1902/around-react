export default function PopupWithForm(props) {
	const { name, title, onSubmit, children, buttonText, isOpen, onClose } = props;
	return (
	  <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
		<div className="popup__content">
		  <button className="popup__close-button" type="button" aria-label="close" onClick={onClose}></button>
		  <h2 className="popup__title">{title}</h2>
		  <form onSubmit={onSubmit} className={`form form_${name}`} name={name}>
			{children}
			<button type="submit" className="popup__button">
			  {buttonText}
			</button>
		  </form>
		</div>
	  </div>
	);
  }