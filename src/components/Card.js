import React from 'react';

import heart from '../images/heart.svg';
import blackHeart from '../images/blackHeart.svg';

function Card(props) {

  const cardLikeButton = (`${props.card.favorite ? blackHeart : heart}`);

  function handleClick() {   
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }
  
  return (
    <li className="card" >
      <button className="card__button-show" type="button" onClick={handleClick}><img className="card__img" src={props.card.img} alt={props.card.name} /></button>
      <div className="card__panel">
        <h2 className="card__subtitle">{props.card.name}</h2>
        <button className="card__button" type="button" onClick={handleLikeClick}><img className="card__like" src={cardLikeButton} alt="Лайк" /></button>
      </div>
    </li>
  );
}

export default Card;