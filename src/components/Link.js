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
    <span className="menu__title" onClick={handleClick}>sort</span>
      <div className={`menu__links ${isMenuOpen ? 'menu__links_open' : ''}`}>
        <ul>
          <li className="menu__link" onClick={handleCardsSortASCClick}>asc</li>
          <li className="menu__link" onClick={handleCardsSortDESCClick}>desc</li>
        </ul>
      </div>
  </div>
  );
}

export default Link;