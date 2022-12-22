import React from "react";
import { useState, useEffect } from "react";
// butona bazınca inputu temizleme
const initialFormValues = { fullname: "", phoneNumber: "" };
//bitti
function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullname === "" || form.phoneNumber === "") {
      return false;
    }
    addContact([...contacts, form]);

  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="fullname"
          value={form.fullname}
          placeholder="Full Name"
          onChange={onChangeInput}
        />
      </div>
      <div>
        <input
          name="phoneNumber"
          value={form.phoneNumber}
          placeholder="Phone Number"
          onChange={onChangeInput}
        />
      </div>

      <div className="btn">
        <button>Add</button>
      </div>
    </form>
  );
}

export default Form;
