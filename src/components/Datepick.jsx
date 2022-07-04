import React, { useState } from "react";
import DatePicker from "react-datepicker";
import  "./datePicker.css"

import "react-datepicker/dist/react-datepicker.css";


const Input = ({onChange, placeholder, value, isSecure, id, onClick}) => (
  <input
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      isSecure={isSecure}
      id={id}
      onClick={onClick}
  />
);

const DatePick = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate}   customInput={<Input />} onChange={(date) => setStartDate(date)} />
  );
};

export default DatePick;