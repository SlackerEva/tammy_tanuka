import React from 'react';

import Link from './Link.js';
import logo from '../images/logo.svg';

function Header(props) {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Логотип" />
      <div className="navigation">
        <Link onLinkClick={props.onSortCards} />
      </div>
    </header>
  );
}

export default Header;
/*

*/
