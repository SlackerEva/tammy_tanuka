import React from 'react';

function Checkbox(props) {

  function handleCardsFilter(event) {
    props.onClick(event.target.checked);
  }

  return (
    <div className="chekboxes">
    <label>Faivorit</label>
    <input type="checkbox" onClick={handleCardsFilter} />
  </div>
  );
}

export default Checkbox;
