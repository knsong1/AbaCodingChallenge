import React from 'react';

function AbaFooter() {
  return (
    <footer className="landing-page-footer-background">
      <div className="landing-page-footer-container ">
        <div className="hours-locations-container">
          <ul className="margin-space-top">
            <li>
              <h3 className="playfair-font">HOURS</h3>
              <p className="margin-top-bottom montserrat-font font-medium">
                Tues - Thurs 12pm - 10pm
              </p>
              <p className="margin-top-bottom montserrat-font font-medium">
                Fri 12pm - 1am
              </p>
              <p className="margin-top-bottom montserrat-font font-medium">
                Sat 11am- 1am
              </p>
              <p className="margin-top-bottom montserrat-font font-medium">
                Sun 10am - 9pm
              </p>
            </li>
            <li>
              <h3 className="playfair-font">LOCATIONS</h3>
              <p className="margin-top-bottom montserrat-font font-medium">
                302 N Green Street,
              </p>
              <p className="margin-top-bottom montserrat-font font-medium">
                3rd Floor
              </p>
              <p className="margin-top-bottom montserrat-font font-medium">
                Chicago,IL 60607
              </p>
              <p className="margin-top-bottom montserrat-font font-medium">
                773-645-1400
              </p>
            </li>
          </ul>
        </div>

        <ul className="footer-list playfair-font flex-display">
          <li className="font-small">FREQUENT DINER</li>
          <li className="font-small">GIFT CARDS</li>
          <li className="font-small">EMPLOYMENT</li>
          <li className="font-small">LEYE.COM</li>
          <li className="font-small">TERMS OF USE</li>
          <li className="font-small">PRIVACY POLICY</li>
        </ul>
      </div>
    </footer>
  );
}

export default AbaFooter;
