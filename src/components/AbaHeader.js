import React from 'react';

function AbaHeader() {
  return (
    <header>
      <div className="header-container playfair-font">
        <ul className="header-list flex-display">
          <li className="header-items margin-right">
            <img
              className="aba-logo-image flex-display"
              src="/images/Aba-Logo.png"
              alt="Aba Logo"
            />
            <img
              className="aba-logo-image-2 flex-display"
              src="/images/Aba-Logo.png"
              alt="Aba Logo"
            />
          </li>
          <li className="header-items flex-display break-line ">
            <a href="#section1">RESERVE</a>
          </li>
          <li className="header-items flex-display break-line ">
            <a href="/menu">MENU</a>
          </li>
          <li className="header-items flex-display break-line ">
            <a href="#section2">GROUP DINING</a>
          </li>
          <li className="header-items flex-display break-line ">
            <a href="/events"> EVENTS</a>
          </li>
          <li className="header-items flex-display break-line ">
            <a href="/team">TEAM </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default AbaHeader;
