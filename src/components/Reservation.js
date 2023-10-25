import React, { useState } from 'react';
import Popup from './Popup';
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

  const daysWithDifferentTimeRestrictions = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const unavailableTimes = {
    Monday: null,
    Tuesday: [
      { start: '11:00 am', end: '12:00 pm' },
      { start: '3:00 pm', end: '4:00 pm' },
    ],
    Wednesday: [
      { start: '7:00 pm', end: '8:00 pm' },
      { start: '2:00 pm', end: '3:00 pm' },
    ],
    Thursday: [{ start: '3:00 pm', end: '4:00 pm' }],
    Friday: [
      { start: '12:00 am', end: '1:00 am' },
      { start: '4:00 pm', end: '5:00 pm' },
    ],
    Saturday: [
      { start: '11:00 am', end: '12:00 am' },
      { start: '3:00 pm', end: '4:00 pm' },
    ],
    Sunday: [
      { start: '10:00 am', end: '11:00 am' },
      { start: '2:00 pm', end: '3:00 pm' },
    ],
  };

  const availableTimes = {
    Monday: [''],
    Tuesday: [
      '12:00 pm',
      '1:00 pm',
      '2:00 pm',
      '3:00 pm',
      '4:00 pm',
      '5:00 pm',
      '6:00 pm',
      '7:00 pm',
      '8:00 pm',
      '9:00 pm',
      '10:00 pm',
    ],
    Wednesday: [
      '12:00 pm',
      '1:00 pm',
      '2:00 pm',
      '3:00 pm',
      '4:00 pm',
      '5:00 pm',
      '6:00 pm',
      '7:00 pm',
      '8:00 pm',
      '9:00 pm',
      '10:00 pm',
    ],
    Thursday: [
      '12:00 pm',
      '1:00 pm',
      '2:00 pm',
      '3:00 pm',
      '4:00 pm',
      '5:00 pm',
      '6:00 pm',
      '7:00 pm',
      '8:00 pm',
      '9:00 pm',
      '10:00 pm',
    ],
    Friday: [
      '12:00 pm',
      '1:00 pm',
      '2:00 pm',
      '3:00 pm',
      '4:00 pm',
      '5:00 pm',
      '6:00 pm',
      '7:00 pm',
      '8:00 pm',
      '9:00 pm',
      '10:00 pm',
      '11:00 pm',
      '12:00 am',
      '1:00 am',
    ],
    Saturday: [
      '11:00 am',
      '12:00 pm',
      '1:00 pm',
      '2:00 pm',
      '3:00 pm',
      '4:00 pm',
      '5:00 pm',
      '6:00 pm',
      '7:00 pm',
      '8:00 pm',
      '9:00 pm',
      '10:00 pm',
      '11:00 pm',
      '12:00 am',
      '1:00 am',
    ],

    Sunday: [
      '10:00 am',
      '11:00 am',
      '12:00 pm',
      '1:00 pm',
      '2:00 pm',
      '3:00 pm',
      '4:00 pm',
      '5:00 pm',
      '6:00 pm',
      '7:00 pm',
      '8:00 pm',
      '9:00 pm',
    ],
  };

  // Initial value for minDate
  const [minDate, setMinDate] = useState(
    new Date().toISOString().split('T')[0]
  );

  // Handles times that are unavailble to users when they select a date in the calendar
  // Makes users unable to select time until date is selected
  const handleDateSelection = () => {
    // Calculate the dayOfWeek based on pickDate
    const selectedDate = new Date(pickDate + 'T00:00:00');
    const dayOfWeek = selectedDate.toLocaleDateString('en-US', {
      weekday: 'long',
    });

    if (daysWithDifferentTimeRestrictions.includes(dayOfWeek)) {
      const availableTimesForDay = availableTimes[dayOfWeek];

      // Get the unavailable times for the selected day
      const unavailableTimesForDay = unavailableTimes[dayOfWeek];

      if (unavailableTimesForDay === null) {
        return (
          <optgroup key={dayOfWeek} label={dayOfWeek}>
            <option>Closed</option>
          </optgroup>
        );
      }

      // Filter out the unavailable times
      const filteredTimes = availableTimesForDay.filter((timeValue) => {
        // Check if the time is within any of the unavailable periods for the day
        return !unavailableTimesForDay.some((unavailablePeriod) => {
          const time = new Date(`${pickDate} ${timeValue}`);
          const start = new Date(`${pickDate} ${unavailablePeriod.start}`);
          const end = new Date(`${pickDate} ${unavailablePeriod.end}`);
          return time >= start && time < end;
        });
      });

      if (filteredTimes.length === 0) {
        return null;
      } else {
        return (
          <optgroup key={dayOfWeek}>
            <option key={dayOfWeek} value={dayOfWeek}>
              {dayOfWeek}
            </option>
            {filteredTimes.map((timeValue) => (
              <option key={timeValue} value={timeValue}>
                {timeValue}
              </option>
            ))}
          </optgroup>
        );
      }
    } else {
      return null;
    }
  };

  const handleFormSubmit = () => {
    if (email && name && phoneNumber) {
      setConfirmationPopup(true);
      setButtonPopup(false);
    } else {
      alert('Please fill out name, phone number, and email.');
    }
  };

  const handleFindTable = () => {
    if (
      pickDate &&
      !daysWithDifferentTimeRestrictions.includes(time) &&
      guests !== '' &&
      guests <= 6
    ) {
      setButtonPopup(true);
    } else {
      alert('Please fill out date, time, and guest count (up to 6).');
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
      setMinDate('');
      setConfirmationPopup(false);
    }
  };

  return (
    <div className="reservation-form-container playfair-font">
      <p className="font-large">MAKE A RESERVATION</p>
      <form className="reservation-form flex-display">
        <div className="full-border">
          <input
            value={pickDate}
            onChange={(e) => setPickDate(e.target.value)}
            type="date"
            placeholder="Date"
            className="montserrat-font"
            min={minDate}
            required
          />
        </div>
        <div className="full-border">
          <select
            className="counter"
            onChange={(e) => {
              setTime(e.target.value);
            }}
            disabled={!pickDate}
          >
            {handleDateSelection()}
          </select>
        </div>
        <div className="full-border">
          <select
            className="guest-select montserrat-font counter"
            onChange={(e) => setGuests(e.target.value)}
            value={guests}
            required
          >
            <option value="none">Guest Count</option>
            <option value="1">1 Person</option>
            <option value="2">2 People</option>
            <option value="3">3 People</option>
            <option value="4">4 People</option>
            <option value="5">5 People</option>
            <option value="6">6 People</option>
          </select>
        </div>
        <div className="full-border">
          <input
            type="button"
            value="Find Table"
            className="montserrat-font landing-page-button reservation"
            onClick={() => handleFindTable()}
            required
          />
        </div>
      </form>

      <div className="pop-up-container">
        <Popup trigger={buttonPopup}>
          <button onClick={() => setButtonPopup(false)} className="close-btn">
            X
          </button>
          <form className="">
            <div className=" ">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
                required
              />
            </div>
            <div className="">
              <input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="tel"
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                required
              />
            </div>

            <div className="">
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
