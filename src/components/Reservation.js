import React from 'react';
import Popup from './Popup';
import { useState } from 'react';
import ConfirmationPopup from './ConfirmationPopup';

function Reservation() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [confirmationPopup, setConfirmationPopup] = useState(false);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleFormSubmit = () => {
    if (email) {
      setConfirmationPopup(true);
      setButtonPopup(false);
    } else {
      alert('Please fill out all fields.');
    }
  };

  const handleCloseSubmit = () => {
    if (confirmationPopup) {
      setName('');
      setEmail('');
      setPhoneNumber('');
      setConfirmationPopup(false);
    }
  };

  const [showConfetti, setShowConfetti] = useState(false);

  // Function to trigger the confetti animation
  const celebrateSubmission = () => {
    setShowConfetti(true);

    // Reset the confetti after a few seconds (you can adjust the timing)
    setTimeout(() => {
      setShowConfetti(false);
    }, 3000); // 3000 milliseconds (3 seconds)
  };

  return (
    <div className="landing-page-reservation-form-container playfair-font">
      <div className="top-line"></div>

      <p className="font-large">MAKE A RESERVATION</p>
      <form className="landing-page-reservation-form flex-display">
        <div className="full-border ">
          <label></label>
          <input type="date" placeholder="Date" required />
        </div>
        <div className="full-border">
          <label></label>
          <input type="time" placeholder="Time" required />
        </div>
        <div className="full-border">
          <label></label>
          <input
            type="number"
            placeholder="Number of Guests"
            min="2"
            max="6"
            required
          />
        </div>
        <div className="full-border">
          <label></label>
          <input
            className="landing-page-reservation-form-button end-of-form-border"
            type="button"
            value="Find Table"
            onClick={() => setButtonPopup(true)}
            required
          />
        </div>
      </form>
      <div className="full-border end-of-form-border pop-up-container">
        <Popup trigger={buttonPopup}>
          <button onClick={() => setButtonPopup(false)} className="close-btn">
            X
          </button>
          <form className="">
            <div className=" ">
              <label></label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
                required
              />
            </div>
            <div className="">
              <label></label>
              <input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="tel"
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="">
              <label></label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                required
              />
            </div>

            <div className="">
              <label></label>
              <input
                type="button"
                value="Submit"
                onClick={() => {
                  handleFormSubmit();
                }}
              />
            </div>
          </form>
        </Popup>
        <ConfirmationPopup trigger={confirmationPopup}>
          <div className="popup">
            <button onClick={() => handleCloseSubmit()} className="close-btn">
              X
            </button>
            <h3 className="popup-inner">Reservation submitted!</h3>
          </div>
        </ConfirmationPopup>
      </div>
    </div>
  );
}

export default Reservation;
