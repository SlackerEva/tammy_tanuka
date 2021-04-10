import React from 'react';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import ImagePopup from './ImagePopup.js';
import api from '../utils/api';

function App() {

  const [selectedCard, setSelectedCard] = React.useState(false);
  const [card, setCard] = React.useState([]);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialCards()    
      .then((items)=>{
        setCards(items.results);
      })
      .catch((err)=>{
        console.log(err);
        })  
  }, []);

  function handleCardLike(card) {
    api.changeLikeCardStatus(card.id, card.favorite)
      .then((newCard) => {
        const newCards = cards.map(item => {return card.id === item.id ? newCard : item});
        setCards(newCards);
      })
      .catch((err)=>{
        console.log(err);
      });
  }

  function handleSortCards(order) {
    api.sortCards(order)
      .then((items) => {
        setCards(items.results);
      })
      .catch((err)=>{
        console.log(err);
      });
  }

  function handleCardClick(card) {
    api.getCard(card.id)
    .then((item) => {
      setSelectedCard(true);
      setCard(item);
    })
    .catch((err)=>{
      console.log(err);
    });
  }

  function closeAllPopups() {
    setSelectedCard(false);
  }

  return (
    <div className="page">
      <Header onSortCards={handleSortCards}  />
      <Main cards={cards} onCardClick={handleCardClick} onCardLike={handleCardLike} />
      <Footer />
      <ImagePopup selectedCard={selectedCard} onClose={closeAllPopups} card={card} />
    </div>
  );
}

export default App;