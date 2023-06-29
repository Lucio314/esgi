import React from 'react'
import LOGO from '../assets/images/esgis-logo.png';

function Header() {
    return (
      <header className="header">
        <div className="d-flex">
          <img src={LOGO} alt="logo" className="header-logo" />
          <h1 className="header-title">Gestion des étudiants</h1>
        </div>
      </header>
    );
}

export default Header
