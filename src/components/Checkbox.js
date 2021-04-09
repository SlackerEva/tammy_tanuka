import React from 'react';

function Checkbox(props) {

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
    <div className="chekboxes">
    <label>Faivorit</label>
    <input type="checkbox" checked />
  </div>
  );
}

export default Checkbox;
