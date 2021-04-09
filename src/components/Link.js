import React from 'react';

function Link(props) {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
   
  function handleClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleCardsSortASCClick() {
    props.onLinkClick("asc");
  }

  function handleCardsSortDESCClick() {
    props.onLinkClick("desc");
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