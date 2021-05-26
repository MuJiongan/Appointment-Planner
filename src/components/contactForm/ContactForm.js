import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  const handleNameChange = e => {
    setName(e.target.value);
  }

  const handlePhoneChange = e => {
    setPhone(e.target.value);
  }

  const handleEmailChange = e => {
    setEmail(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={name} placeholder="Name" onChange={handleNameChange}/>
      <input type="tel" name="phone" value={phone} placeholder="Phone Number" pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}" onChange={handlePhoneChange}/>
      <input type="email" name="email" value={email} placeholder="Email" onChange={handleEmailChange}/>
      <input type="submit" value='submit'/>
    </form>
  );
};
