import React, { useState } from 'react';
import Popup from './Popup';
import ConfirmationPopup from './ConfirmationPopup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the styles
import AlertPopup from './AlertPopup';
import DayRestrictionPopup from './DayRestrictionPopup';
import ReservationAlert from './ReservationAlert';
import EmailPopup from './EmailPopup';

function Reservation() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [confirmationPopup, setConfirmationPopup] = useState(false);
  const [alertPopup, setAlertPopup] = useState(false);
  const [dayAlertPopup, setDayAlertPopup] = useState(false);
  const [reservationAlert, setReservationAlert] = useState(false);
  const [emailPopup, setEmailPopup] = useState(false);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [pickDate, setPickDate] = useState(null);
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

  const handleDateChange = (date) => {
    setPickDate(date);
  };

  // Handles times that are unavailble to users when they select a date in the calendar
  // Makes users unable to select time until date is selected
  const handleTimeSelection = () => {
    // Calculate the dayOfWeek based on pickDate
    const selectedDate = new Date(pickDate);
    const dayOfWeek = selectedDate.toLocaleDateString('en-US', {
      weekday: 'long',
    });

    if (daysWithDifferentTimeRestrictions.includes(dayOfWeek)) {
      const unavailableTimesForDay = unavailableTimes[dayOfWeek];

      if (unavailableTimesForDay === null) {
        return (
          <optgroup key={dayOfWeek} label={dayOfWeek}>
            <option disabled>Closed</option>
          </optgroup>
        );
      }

      // Filter out the unavailable times
      const filteredTimes = availableTimes[dayOfWeek].filter((timeValue) => {
        const time = new Date(selectedDate);
        const [hours, minutes] = timeValue.split(':');
        time.setHours(parseInt(hours), parseInt(minutes));

        const isAvailable = unavailableTimesForDay.every(
          (unavailablePeriod) => {
            const start = new Date(selectedDate);
            const [startHours, startMinutes] =
              unavailablePeriod.start.split(':');
            start.setHours(parseInt(startHours), parseInt(startMinutes));

            const end = new Date(selectedDate);
            const [endHours, endMinutes] = unavailablePeriod.end.split(':');
            end.setHours(parseInt(endHours), parseInt(endMinutes));

            return time < start || time >= end;
          }
        );

        return isAvailable;
      });

      if (filteredTimes.length === 0) {
        return null;
      } else {
        return (
          <optgroup key={dayOfWeek} label={dayOfWeek}>
            <option className="font-small" key="placeholder" value="">
              Select a time
            </option>
            {filteredTimes.map((timeValue) => (
              <option className="font-small" key={timeValue} value={timeValue}>
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
  //Validate email
  function validateEmail(email) {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  // Prevents users from submitting reservation blank and sets states of Popup for reservation confirmation
  const handleFormSubmit = () => {
    if (name && phoneNumber && validateEmail(email)) {
      setConfirmationPopup(true);
    } else if (!validateEmail(email)) {
      setEmailPopup(true);
    } else {
      setAlertPopup(true);
    }
  };

  // Prevents users from submitting reservation for date, time, and guest count blank and sets state of Popup for name, email, and phone number
  const handleFindTable = () => {
    const selectedDate = new Date(pickDate);
    const dayOfWeek = selectedDate.toLocaleDateString('en-US', {
      weekday: 'long',
    });
    if (dayOfWeek === 'Monday') {
      setDayAlertPopup(true);
    } else if (time !== '' && pickDate !== '' && guests !== '' && guests <= 6) {
      setButtonPopup(true);
    } else {
      setReservationAlert(true);
    }
  };

  // resets input fields to their initial state and
  const handleCloseSubmit = () => {
    if (confirmationPopup) {
      setName('');
      setEmail('');
      setPhoneNumber('');
      setPickDate('');
      setTime('');
      setGuests('');
      setConfirmationPopup(false);
      setButtonPopup(false);
    }
  };

  const handleAlertPopup = () => {
    if ((setAlertPopup, setDayAlertPopup, setReservationAlert)) {
      setAlertPopup(false);
      setDayAlertPopup(false);
      setReservationAlert(false);
      setEmailPopup(false);
    }
  };

  return (
    <div className="reservation-form-container playfair-font">
      <p className="font-large">MAKE A RESERVATION</p>
      <form className="reservation-form flex-display">
        <div className="full-border">
          <DatePicker
            selected={pickDate}
            value={pickDate}
            onChange={handleDateChange}
            placeholderText="Select a date"
            dateFormat="MMMM d, yyyy"
            minDate={new Date()}
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
            {handleTimeSelection()}
          </select>
        </div>
        <div className="full-border">
          <select
            className="guest-select montserrat-font counter font-small"
            onChange={(e) => setGuests(e.target.value)}
            value={guests}
            aria-label="Select the number of guests"
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
            className="montserrat-font reservation-form-button reservation"
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
                type="text"
                pattern="[0-9]*"
                maxLength="10"
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
                aria-label="Submit"
                onClick={() => {
                  handleFormSubmit();
                }}
              />
            </div>
          </form>
        </Popup>
        <ReservationAlert trigger={reservationAlert}>
          <button
            className="close-btn"
            aria-label="Close"
            onClick={() => {
              handleAlertPopup();
            }}
          >
            X
          </button>
          <h3>Please fill out date, time, and number of guests </h3>
        </ReservationAlert>
        <ConfirmationPopup trigger={confirmationPopup}>
          <button
            aria-label="Close"
            onClick={() => handleCloseSubmit()}
            className="close-btn"
          >
            X
          </button>
          <h3>Reservation submitted!</h3>
        </ConfirmationPopup>

        <AlertPopup trigger={alertPopup}>
          <button
            aria-label="Close"
            onClick={() => handleAlertPopup()}
            className="close-btn"
          >
            X
          </button>
          <div>
            <h3>Please fill out name, email, and phone number</h3>
          </div>
        </AlertPopup>

        <DayRestrictionPopup trigger={dayAlertPopup}>
          <button
            className="close-btn"
            aria-label="Close"
            onClick={() => {
              handleAlertPopup();
            }}
          >
            X
          </button>
          <h3>Sorry we are closed on Mondays.</h3>
        </DayRestrictionPopup>

        <EmailPopup trigger={emailPopup}>
          <button
            className="close-btn"
            aria-label="Close"
            onClick={() => {
              handleAlertPopup();
            }}
          >
            X
          </button>
          <h3>Please provide a valid email</h3>
        </EmailPopup>
      </div>
    </div>
  );
}

export default Reservation;
