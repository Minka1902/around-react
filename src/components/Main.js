import React, { useContext } from 'react';
import Card from './Card';
import CurrentUserContext from '../contexts/CurrentUserContext';

export default function Main(props) {
  const { cards, onCardLike, onCardDelete, onEditAvatarClick, onEditProfileClick, onAddPlaceClick, onCardClick } = props;
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <img className="profile__avatar" style={{ backgroundImage: `url(${currentUser.avatar})`}} onClick={onEditAvatarClick} />
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__name text-hiding">{currentUser.name}</h1>
            <button className="profile__edit-button" onClick={onEditProfileClick} type="button" aria-label="edit"></button>
          </div>
          <p className="profile__about-me text-hiding">{currentUser.about}</p>
        </div>
        <button onClick={onAddPlaceClick} type="button" className="profile__add-button" aria-label="add">+</button>
      </section>

      <section className="cards">
        <ul className="cards__list">
          {cards.map((card) => {
            return (<Card key={card._id} card={card} onCardClick={onCardClick} onCardDelete={onCardDelete} onCardLike={onCardLike} />);
          })}
        </ul>
      </section>
    </main>
  );
}
