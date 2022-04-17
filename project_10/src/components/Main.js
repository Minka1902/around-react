import editProfileIcon from '../images/edit-button.svg';
import addNewCardIcon from '../images/add-close-button.svg';
import editAvatarIcon from '../images/edit-pencil.svg';
import React, { useContext } from 'react';
import Card from './Card';
import CurrentUserContext from '../contexts/CurrentUserContext';

export default function Main(props) {
  const { cards, onCardLike, onCardDelete, onEditAvatarClick, onEditProfileClick, onAddPlaceClick, onCardClick } = props;
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__image" style={{ backgroundImage: `url(${currentUser.avatar})` }}>
          <div className="profile__image-overlay">
            <img onClick={onEditAvatarClick} src={editAvatarIcon} alt="edit icon" className="profile__edit-icon" />
          </div>
        </div>
        <div className="profile__info">
          <div className="profile__name-wrapper">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button onClick={onEditProfileClick} type="button" className="button button_type_edit" aria-label="edit">
              <img src={editProfileIcon} alt="pencil icon for editing" />
            </button>
          </div>
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <button onClick={onAddPlaceClick} type="button" className="button button_type_add" aria-label="add">
          <img src={addNewCardIcon} alt="plus symbol for adding new card" className="button__plus-image" />
        </button>
      </section>
      <section className="cards">
        <ul className="cards-list">
          {cards.map((card) => {
            return (<Card key={card._id} card={card} onCardClick={onCardClick} onCardDelete={onCardDelete} onCardLike={onCardLike} />);
          })}
        </ul>
      </section>
    </main>
  );
}
