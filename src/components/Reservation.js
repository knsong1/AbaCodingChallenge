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
  const unavailableTimes = ['09:00', '12:00', '15:00', '18:00'];

  const today = new Date().toISOString().split('T')[0];
  const [minDate, setMinDate] = useState(today);

  const handleFormSubmit = () => {
    if (email && name && phoneNumber) {
      setConfirmationPopup(true);
      setButtonPopup(false);
    } else {
      alert('Please fill out name, phone number and email.');
    }
  };

  const handleFindTable = () => {
    if (pickDate && time && guests <= 6) {
      setButtonPopup(true);
    } else {
      alert('Please fill out date, time, and guest count (up to 6)');
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
      <p className="font-large">MAKE A RESERVATION</p>
      <form className="landing-page-reservation-form flex-display">
        <div className="full-border ">
          <label></label>
          <input
            value={pickDate}
            onChange={(e) => setPickDate(e.target.value)}
            type="date"
            placeholder="Date"
            className="montserrat-font "
            min={minDate}
            required
          />
        </div>
        <div className="full-border">
          <label></label>

          <select
            className="counter "
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            {Array.from({ length: 24 }, (_, hour) => {
              const formattedHour = hour.toString().padStart(2, '0');
              const timeValue = `${formattedHour}:00`;
              const isUnavailable = unavailableTimes.includes(timeValue);

              return (
                <option
                  key={formattedHour}
                  value={timeValue}
                  disabled={isUnavailable}
                >
                  {timeValue}
                </option>
              );
            })}
          </select>
        </div>
        <div className="full-border">
          <label></label>
          <select
            className="guest-select montserrat-font counter"
            onChange={(e) => setGuests(e.target.value)}
            value={guests}
            required
          >
            <option value="1">1 Person</option>
            <option value="2">2 People</option>
            <option value="3">3 People</option>
            <option value="4">4 People</option>
            <option value="5">5 People</option>
            <option value="6">6 People</option>
          </select>
        </div>
        <div className="full-border">
          <label></label>
          <input
            type="button"
            value="Find Table"
            className="montserrat-font landing-page-button"
            onClick={() => handleFindTable()}
            required
          />
        </div>
      </form>

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
