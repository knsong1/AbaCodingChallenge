import React from 'react';
import AbaFooter from './AbaFooter';
import AbaHeader from './AbaHeader';
import Reservation from './Reservation';

const LandingPage = () => {
  const restaurantName = 'Aba';
  return (
    <div className="landing-page-container">
      <AbaHeader></AbaHeader>
      <div className="top-images flex-display">
        <div className="spacing-image ">
          <img
            className="image-fluid up-47-1"
            alt="up-47.jpg"
            src="/images/up-47.jpg"
          ></img>
        </div>
        <div className="spacing-image village-salad">
          <img
            className="image-fluid "
            src="/images/Aba_VillageSalad.jpg"
            alt="Aba_VillageSalad.jpg"
          ></img>
        </div>
      </div>
      <section id="section1">
        <hr className="divider"></hr>
        <Reservation></Reservation>
      </section>

      <div className="montserrat-font bottom-line group-dining-container">
        <div className="flex-display group-dining-content-container">
          <section id="section2">
            <div className="display-block">
              <div>
                <p className="font-large playfair-font">GROUP DINING AT ABA</p>
              </div>
              <div>
                <p className="font-medium">
                  Celebrating an anniversary, birthday, or new promotion at
                  work. We provide multiple services and dishes to make your day
                  special.
                </p>
              </div>
              <div>
                <button className="playfair-font landing-page-button font-small">
                  PLAN YOUR PARTY
                </button>
              </div>
            </div>
          </section>

          <div className="group-dining-image">
            <div className="group-dining-image-inner ">
              <img
                className="image-fluid image-right"
                src="/images/up-35.jpg"
                alt="up-35.jpg"
              ></img>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="montserrat-font top-line group-dining-container">
          <div className="flex-display group-dining-content-container">
            <div className="group-dining-image">
              <div className=" image-left group-dining-image-inner">
                <img
                  className="image-fluid "
                  alt="up-35.jpg"
                  src="/images/up-35.jpg"
                ></img>
              </div>
            </div>
            <div className="display-block">
              <div>
                <p className="font-large playfair-font">WINE DINNER</p>
              </div>
              <div>
                <p className="font-medium">
                  At {restaurantName}, we invite you to elevate your dining
                  experience and embark on a journey of taste, culture, and
                  refinement.
                </p>
                <p>July 14, 2023 at 10:00pm</p>
              </div>

              <div>
                <button className="playfair-font landing-page-button font-small">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section3">
        <div className="montserrat-font top-line group-dining-container">
          <div className="flex-display group-dining-content-container">
            <div className="display-block">
              <div>
                <p className="font-large playfair-font">ABOUT ABA</p>
              </div>
              <div>
                <p className="font-medium">
                  Celebrating an anniversary, birthday, or new promotion at
                  work. We provide multiple services and dishes to make your day
                  special.
                </p>
              </div>
            </div>

            <div className="group-dining-image">
              <div className="group-dining-image-inner">
                <img
                  className="image-fluid  image-right"
                  src="/images/up-42.jpg"
                  alt="up-42.jpg"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section4">
        <AbaFooter></AbaFooter>
      </section>
    </div>
  );
};

export default LandingPage;
