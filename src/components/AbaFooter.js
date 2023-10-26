import React from 'react';

function AbaFooter() {
  return (
    <footer className="footer-background" aria-label="Footer">
      <div className="footer-container ">
        <div className="hours-locations-container">
          <ul className="margin-space-top">
            <li>
              <h3 className="playfair-font margin-bottom">HOURS</h3>
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

            <li className="inline-block">
              <a href="/contact">
                <h3 className="playfair-font">CONTACT</h3>
              </a>

              <a href="/newsletter">
                <h3 className="playfair-font">NEWSLETTER</h3>
              </a>
            </li>

            <li className="locations">
              <a href="/location">
                <h3 className="playfair-font margin-bottom">LOCATIONS</h3>
              </a>
              <p className="margin-top-bottom montserrat-font font-medium">
                302 N Green Street,
              </p>
              <p className="margin-top-bottom montserrat-font font-medium">
                3rd Floor
              </p>
              <p className="margin-top-bottom montserrat-font font-medium">
                Chicago, IL 60607
              </p>
              <p className="margin-top-bottom montserrat-font font-medium phone-number">
                <a href="tel:+7736451400">773-645-1400</a>
              </p>
            </li>
          </ul>
        </div>

        <ul className="footer-list playfair-font flex-display">
          <li className="font-small">
            <a href="/frequent-diner">FREQUENT DINER</a>
          </li>
          <li className="font-small">
            <a href="/gift-cards">GIFT CARDS</a>
          </li>
          <li className="font-small">
            <a href="/employment">EMPLOYMENT </a>
          </li>
          <li className="font-small">
            <a href="/leye.com"> LEYE.COM</a>
          </li>
          <li className="font-small">
            <a href="/terms"> TERMS OF USE</a>
          </li>
          <li className="font-small">
            <a href="/privacy-policy"> PRIVACY POLICY</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default AbaFooter;
