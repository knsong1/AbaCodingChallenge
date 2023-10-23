import React from 'react';
import AbaFooter from './AbaFooter';
import AbaHeader from './AbaHeader';
import Reservation from './Reservation';

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <AbaHeader></AbaHeader>
      <div className="top-images flex-display">
        <div className="spacing-image ">
          <img className="image-fluid up-47-1" src="/images/up-47.jpg"></img>
        </div>
        <div className="spacing-image ">
          <img className="image-fluid" src="/images/Aba_VillageSalad.jpg"></img>
        </div>
      </div>

      <Reservation></Reservation>

      <div className="top-line"></div>

      <div className="montserrat-font top-line group-dining-container">
        <div className="flex-display group-dining-content-container">
          <div className="display-block">
            <div>
              <p className="font-large playfair-font">GROUP DINING AT ABA</p>
            </div>
            <div>
              <p className="font-medium">
                Celebrating an anniversary, birthday, or new promotion at work.
                We provide multiple services and dishes to make your day
                special.
              </p>
            </div>
            <div>
              <button className="landing-page-reservation-form-button">
                PLAN YOUR PARTY
              </button>
            </div>
          </div>

          <div className="group-dining-image">
            <img className="image-fluid " src="/images/up-35.jpg"></img>
          </div>
        </div>
      </div>
      <div className="montserrat-font top-line group-dining-container">
        <div className="flex-display group-dining-content-container">
          <div className="group-dining-image">
            <img className="image-fluid " src="/images/up-35.jpg"></img>
          </div>
          <div className="display-block">
            <div>
              <p className="font-large playfair-font">WINE DINER</p>
            </div>
            <div>
              <p className="font-medium">
                Celebrating an anniversary, birthday, or new promotion at work.
                We provide multiple services and dishes to make your day
                special.
              </p>
            </div>
            <div>
              <button className="landing-page-reservation-form-button">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="montserrat-font top-line group-dining-container">
        <div className="flex-display group-dining-content-container">
          <div className="display-block">
            <div>
              <p className="font-large playfair-font">ABOUT ABA</p>
            </div>
            <div>
              <p className="font-medium">
                Celebrating an anniversary, birthday, or new promotion at work.
                We provide multiple services and dishes to make your day
                special.
              </p>
            </div>
          </div>

          <div className="group-dining-image">
            <img className="image-fluid " src="/images/up-42.jpg"></img>
          </div>
        </div>
      </div>
      <div className="bottom-line"></div>
      <AbaFooter></AbaFooter>
    </div>
  );
};

export default LandingPage;
