import React from 'react';
import AbaFooter from './AbaFooter';
import AbaHeader from './AbaHeader';
import Reservation from './Reservation';

const LandingPage = () => {
  const restaurantName = 'Aba';
  return (
    <div className="landing-page-container">
      <AbaHeader></AbaHeader>
      <div className="top-images ">
        <div className="spacing-image ">
          <picture>
            <source srcSet="/images/up-47.webp" type="/image/webp" />
            <img
              className="image-fluid up-47-1"
              alt="up-47.jpg"
              src="/images/up-47.jpg"
            ></img>
          </picture>
        </div>
        <div className="spacing-image village-salad">
          <picture>
            <source srcSet="/images/Aba_VillageSalad.webp" type="/image/webp" />

            <img
              className="image-fluid "
              src="/images/Aba_VillageSalad.jpg"
              alt="Aba_VillageSalad.jpg"
            ></img>
          </picture>
        </div>
      </div>
      <section>
        <hr className="divider"></hr>
        <Reservation></Reservation>
      </section>

      <div className="montserrat-font bottom-line group-dining-container">
        <div className="flex-display content-container">
          <section>
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
                <button className="playfair-font reservation-button font-small">
                  <a href="/plan-your-party">PLAN YOUR PARTY</a>
                </button>
              </div>
            </div>
          </section>

          <div className="dining-image">
            <div className="dining-image-inner ">
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
          <div className="flex-display content-container">
            <div className="dining-image">
              <div className="image-left dining-image-inner">
                <img
                  className="image-fluid"
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
                <p className="font-medium">July 14, 2023 at 10:00pm</p>
              </div>

              <div>
                <button className="playfair-font reservation-button font-small">
                  <a href="/wine-dinner">LEARN MORE</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="montserrat-font top-line group-dining-container">
          <div className="flex-display content-container">
            <div className="display-block">
              <div>
                <p className="font-large playfair-font">ABOUT ABA</p>
              </div>
              <div>
                <p className="font-medium">
                  Aba is a renowned Mediterranean and Middle Eastern restaurant
                  in Chicago, offering a diverse menu of delicious dishes,
                  creative cocktails, and a stylish ambiance.
                </p>
              </div>
            </div>

            <div className="dining-image">
              <div className="dining-image-inner">
                <img
                  className="image-fluid image-right"
                  src="/images/up-42.jpg"
                  alt="up-42.jpg"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <AbaFooter></AbaFooter>
      </section>
    </div>
  );
};

export default LandingPage;
