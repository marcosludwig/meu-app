import './Header.css';
import React from 'react';

const Header = ({ onAddPhoto }) => {
  return (
    <header>
      <h1>Minha galeria de fotos</h1>
      <button onClick={onAddPhoto}>Adicionar foto</button>
    </header>
  );
};

export default Header;