import React from "react";
import {ContactPicker} from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} type='text' placeholder="Title" onChange={(e) => {setTitle(e.target.value)}}/>
      <input value={date} type='date' placeholder="Date" onChange={(e) => {setDate(e.target.value)}} min={getTodayString}/>
      <input value={time} type='time' placeholder="Time" onChange={(e) => {setTime(e.target.value)}}/>
      <ContactPicker contacts={contacts} onChange={setContact}/>
      <input type='submit'/>
    </form>
  );
};
