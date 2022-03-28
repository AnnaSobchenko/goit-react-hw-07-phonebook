import { Notify } from 'notiflix';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';

const Form = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: '',
    phone: '',
  });

  const items = useSelector(state => state.contacts.items);
  console.log(items);
  
  const handleSubmit = e => {
    e.preventDefault();
    if (
      items.map(el => el.name === form.name).filter(el => el === true).length
    ) {
      Notify.info(`${form.name} is already in contact`, {
        timeout: 3000,
      });
    } else {
      Notify.success(`${form.name} is added`, { timeout: 3000 });
      setForm({ name: '', phone: '' });
      return dispatch(addContact(form));
    }
    setForm({ name: '', phone: '' });
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const { name, phone } = form;
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Name
        <input
          className="name"
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label>
        Number
        <input
          className="number"
          type="tel"
          name="phone"
          value={phone}
          placeholder="XXX-XX-XX"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default Form;
