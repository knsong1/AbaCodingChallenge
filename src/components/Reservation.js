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
  const [pickDate, setPickDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');

  const handleFormSubmit = () => {
    if ((email, name, phoneNumber)) {
      setConfirmationPopup(true);
      setButtonPopup(false);
    } else {
      alert('Please fill out email, name, and phone number.');
    }
  };

  const handleFindTable = () => {
    if ((pickDate, time, guests)) {
      setButtonPopup(true);
    } else {
      alert('Please fill out date, time, and guests');
    }
  };

  const handleCloseSubmit = () => {
    if (confirmationPopup) {
      setName('');
      setEmail('');
      setPhoneNumber('');
      setPickDate('');
      setTime('');
      setGuests('');
      setConfirmationPopup(false);
    }
  };

  return (
    <div className="landing-page-reservation-form-container playfair-font">
      <hr className="divider"></hr>
      <p className="font-large">MAKE A RESERVATION</p>
      <form className="landing-page-reservation-form flex-display">
        <div className="full-border ">
          <label></label>
          <input
            value={pickDate}
            onChange={(e) => setPickDate(e.target.value)}
            type="date"
            placeholder="Date"
            required
          />
        </div>
        <div className="full-border">
          <label></label>
          <input
            value={time}
            onChange={(e) => setTime(e.target.value)}
            type="time"
            placeholder="Time"
            required
          />
        </div>
        <div className="full-border">
          <label></label>
          <input
            onChange={(e) => setGuests(e.target.value)}
            type="number"
            placeholder="Number of Guests"
            min="2"
            max="6"
            value={guests}
            required
          />
        </div>
        <div className="full-border">
          <label></label>
          <input
            className="landing-page-reservation-form-button "
            type="button"
            value="Find Table"
            onClick={() => handleFindTable()}
            required
          />
        </div>
      </form>
      <hr className="divider"></hr>
      <div className=" pop-up-container">
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
