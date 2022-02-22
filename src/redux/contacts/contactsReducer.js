import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { addContact, filterInput, removeContact } from './contactsActions';

const initialContact = [];

const contactsReducer = createReducer(initialContact, {
  [addContact]: (state, { payload }) => [...state, payload],
  [removeContact]: (state, { payload }) =>
    state.filter(el => el.id !== payload),
});

const filterReducer = createReducer('', {
  [filterInput]: (_, { payload }) => payload,
});

const phonebookReducer = combineReducers({
  items: contactsReducer,
  filter: filterReducer,
});

export default phonebookReducer;
