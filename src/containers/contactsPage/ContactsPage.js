import React, {useState} from "react";
import {ContactForm} from '../../components/contactForm/ContactForm';
import {TileList} from '../../components/tileList/TileList'


export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!hasDuplicateName(e)){
      props.addContact(name, phone, email);
      // clear data
      setName('');
      setPhone('');
      setEmail('');
    }else{
      alert("You can't choose this name!")
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  const hasDuplicateName = (e) => {
    for (var contact of props.contacts){
      if (contact.name === name){
        return true;
      }
    }
    return false;
  }

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm name={name} phone={phone} email={email} setName={setName} setEmail={setEmail} setPhone={setPhone} handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList arr={props.contacts}/>
      </section>
    </div>
  );
};
