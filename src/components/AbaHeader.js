import React from 'react';

function AbaHeader() {
  return (
    <header>
      <div className="header-container playfair-font">
        <ul className="header-list flex-display">
          <li className="header-items margin-right ">
            <img
              className="aba-logo-image flex-display"
              src="/images/Aba-Logo.png"
              alt="Aba Logo"
            />
          </li>
          <li className="header-items flex-display break-line ">
            <a>RESERVE</a>
          </li>
          <li className="header-items flex-display break-line ">
            <a>MENU</a>
          </li>
          <li className="header-items flex-display break-line ">
            <a>GROUP DINING</a>
          </li>
          <li className="header-items flex-display break-line ">
            <a> EVENTS</a>
          </li>
          <li className="header-items flex-display break-line ">
            <a>TEAM </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default AbaHeader;
