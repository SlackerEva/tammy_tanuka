import React from 'react';

function Checkbox(props) {

  function handleCardsFilter(event) {
    props.onClick(event.target.checked);
  }

  return (
    <div className="boxes">
      <label className="boxes__label">favorite</label>
      <input type="checkbox" onClick={handleCardsFilter} />
    </div>
  );
}

export default Checkbox;
