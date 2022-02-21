import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { addContact, filterContacts, removeContact } from './contactsActions';

const initialContact = [];

const contactsReducer = createReducer(initialContact, {
  [addContact]: (state, { payload }) => {
    const contacts = [...state, payload];
    return contacts;
  },
  [removeContact]: (state, { payload }) => {
    const contacts = state.filter(el => el.id !== payload);
    return contacts;
  },
  
});

const filterReducer=createReducer("",{
    [filterContacts]: (state, { filter }) => {
    const contacts = state.name
      .toLowerCase()
      .includes(filter.toLocaleLowerCase());
    return contacts;
  }});

const phonebookReducer=combineReducers({
contacts:contactsReducer,
filter: filterReducer,
})

export default  phonebookReducer;


