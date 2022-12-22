import React from "react";
import List from "./List";
import Form from "./Form";
import { useState, useEffect } from "react";
import './styles.css';

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Mehmet",
      phoneNumber: "123123",
    },
    {
      fullname: "Ayşe",
      phoneNumber: "456457",
    },
    {
      fullname: "Nazlı",
      phoneNumber: "987456",
    },
    {
      fullname: "Gülce",
      phoneNumber: "2468",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1 id="baslik">
        Contacts
      </h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
