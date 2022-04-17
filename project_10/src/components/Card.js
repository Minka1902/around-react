import deleteIcon from '../images/trash-button.svg';
import CurrentUserContext from '../contexts/CurrentUserContext';
import React from 'react';

export default function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = currentUser._id === props.card.owner._id;
  const isLiked = props.card.likes.some(({ _id }) => _id === currentUser._id);
  const cardLikeButtonClassName = isLiked ? `button like-button like-button_active` : `button like-button`;

  const handleClick = () => props.onCardClick(props.card);

  const handleLikeClick = () => props.onCardLike(props.card, isLiked);

  const handleDeleteClick = () => props.onCardDelete(props.card);

  return (
    <li className="cards-list__item">
      {isOwn && (
        <button type="button" className="button" aria-label="trash" onClick={handleDeleteClick}>
          <img src={deleteIcon} alt="trash button" className="button button_type_trash" />
        </button>
      )}
      <img src={props.card.link} alt={props.card.name} className="cards-list__image" onClick={handleClick} />
      <div className="cards-list__info-section">
        <h2 className="cards-list__image-title">{props.card.name}</h2>
        <div className="cards-list__like-wrapper">
          <button type="button" className={cardLikeButtonClassName} aria-label="like" onClick={handleLikeClick}></button>
          <span className="cards-list__like-count">{props.card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}
