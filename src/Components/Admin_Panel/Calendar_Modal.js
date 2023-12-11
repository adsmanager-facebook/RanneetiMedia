import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import the styles

const Calendar_Modal = ({ onClose, onSelect }) => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  const handleSelect = () => {
    onSelect(date);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Select Date</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <Calendar onChange={onChange} value={date} />
        </div>
        <div className="modal-footer">
          <button onClick={handleSelect}>Select</button>
        </div>
      </div>
    </div>
  );
};

export default Calendar_Modal;
