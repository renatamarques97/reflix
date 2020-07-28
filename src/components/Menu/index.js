import React from 'react';
import Logo from '../../assets/reflix.png';
import Button from '../Button'
import './Menu.css';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={ Logo } alt="Reflix Logo" />
      </a>
      <Button as="a" className="ButtonLink" href="/">
        New Video
      </Button>
    </nav>
  );
}

export default Menu;
