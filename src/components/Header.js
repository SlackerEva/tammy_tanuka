import React from 'react';
import Link from './Link.js';
import Checkbox from './Checkbox.js';
import logo from '../images/logo.svg';

function Header(props) {
 
  const [sortCardsLink, setSortCardsLink] = React.useState("order_by=name_asc");
  const [filterCardsLink, setFilterCardsLnk] = React.useState("");
  const [searchCardsLink, setSearchCardsLnk] = React.useState("");
  const [changed, setChanged] = React.useState(true);

  function filterCards(check) {   
    if (check === true) {
      setFilterCardsLnk("&favorite=yes");
    } else {
      setFilterCardsLnk("");
    }
    setChanged(true);
  } 

  function sortCards(direction) {
    if (direction === true) {
      setSortCardsLink("order_by=name_asc");
    } else { 
      setSortCardsLink("order_by=name_desc");
    }
    setChanged(true);
  } 

  function serachCards(event) {
    if (event.target.value !=="") {
      setSearchCardsLnk("&search_string=" + event.target.value);
    } else {
      setSearchCardsLnk("");
    }
    setChanged(true);
  } 

  React.useEffect(() => {    
    function generateLink() {
      console.log(sortCardsLink + filterCardsLink + searchCardsLink);
      props.onSortCards(sortCardsLink + filterCardsLink + searchCardsLink);
    }

    if (changed) {
      setChanged(false);
      generateLink();
    }
  },[sortCardsLink, filterCardsLink, props, changed, searchCardsLink]);


  return (
    <header className="header">
      <img className="logo" src={logo} alt="Логотип" />
      <Checkbox onClick={filterCards} />
      <input placeholder="Поиск" onChange={serachCards}/>
      <div className="navigation">
        <Link onClick={sortCards} />
      </div>
    </header>
  );
}

export default Header;