import React from 'react';

function AbaHeader() {
  return (
    <nav>
      <div className="nav-container playfair-font">
        <ul className="nav-list flex-display">
          <div className="nav-items margin-right" aria-label="Logo">
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
          </div>
          <li className="nav-items flex-display break-line ">
            <a href="/reservation">RESERVE</a>
          </li>
          <li className="nav-items flex-display break-line ">
            <a href="/menu">MENU</a>
          </li>
          <li className="nav-items flex-display break-line ">
            <a href="/group-dining">GROUP DINING</a>
          </li>
          <li className="nav-items flex-display break-line ">
            <a href="/events"> EVENTS</a>
          </li>
          <li className="nav-items flex-display break-line ">
            <a href="/team">TEAM </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default AbaHeader;
