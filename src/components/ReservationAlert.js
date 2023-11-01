import React from 'react';

function ReservationAlert(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">{props.children}</div>
    </div>
  ) : (
    ''
  );
}

export default ReservationAlert;
