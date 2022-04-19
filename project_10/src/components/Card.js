import deleteIcon from '../images/trash_icon.svg';
import CurrentUserContext from '../contexts/CurrentUserContext';
import React from 'react';

export default function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = currentUser._id === props.card.owner._id;
  const isLiked = props.card.likes.some(({ _id }) => _id === currentUser._id);
  const cardLikeButtonClassName = isLiked ? `card__like-button info__card_like-button_state_active` : `card__like-button`;

  const handleClick = () => props.onCardClick(props.card);

  const handleLikeClick = () => props.onCardLike(props.card, isLiked);

  const handleDeleteClick = () => props.onCardDelete(props.card);

  return (
    <li className="card">
      {isOwn && (
        <img src={deleteIcon} alt="trash button" className="card__delete" onClick={handleDeleteClick} />
      )}
      <img src={props.card.link} alt={props.card.name} className="card__image" onClick={handleClick} />
      <div className="card__info">
        <h2 className="card__text text-hiding">{props.card.name}</h2>
        <div>
          <button className={cardLikeButtonClassName} type="button" aria-label="like" onClick={handleLikeClick}></button>
          <span className="card__like-number">{props.card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}
