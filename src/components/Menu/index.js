import React from 'react';
import Logo from '../../assets/reflix.png';
import ButtonLink from './components/ButtonLink';
import './Menu.css';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={ Logo } alt="Reflix Logo" />
      </a>
      <ButtonLink className="ButtonLink" href="/">
        New Video
      </ButtonLink>
    </nav>
  );
}

export default Menu;
