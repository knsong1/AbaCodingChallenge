import React from 'react';

function DayRestrictionPopup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">{props.children}</div>
    </div>
  ) : (
    ''
  );
}

export default DayRestrictionPopup;
