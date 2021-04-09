import React from 'react';
import Card from './Card';

function Main(props) {

  return (
    <main className="content">
      <section className="gallery">
        <ul className="cards">
          {props.cards !== undefined ? props.cards.map((item) => {
            return (<Card card={item} key={item.id} onCardClick={props.onCardClick} onCardLike={props.onCardLike} />)
          }):props.cards }
        </ul>
      </section>
    </main>
  );
}

export default Main;