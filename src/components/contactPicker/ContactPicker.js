import React from "react";

export const ContactPicker = (props) => {
  return (
    <select>
      <option value='' selected="selected" onChange={(e) => props.onChange(e.target.value)}>No Contact</option>
      {props.contacts.map((value, index) => {
        return <option key={index} value={value} onChange={(e) => props.onChange(e.target.value)}>{value.name}</option>
      })}
    </select>
  );
};
