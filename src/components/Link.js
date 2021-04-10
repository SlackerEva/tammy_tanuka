import React from 'react';

function Link(props) {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
   
  function handleClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleCardsSortASCClick() {
    props.onClick(true);
  }

  function handleCardsSortDESCClick() {
    props.onClick(false);
  }

  return (
    <div className="menu">
    <span onClick={handleClick}>Сортировать</span>
      <div className={`menu__links ${isMenuOpen ? 'menu__links_open' : ''}`}>
        <ul>
          <li onClick={handleCardsSortASCClick}>По алфавиту</li>
          <li onClick={handleCardsSortDESCClick}>Не по алфавиту</li>
        </ul>
      </div>
  </div>
  );
}

export default Link;