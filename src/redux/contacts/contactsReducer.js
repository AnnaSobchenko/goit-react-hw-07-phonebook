import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { filterInput } from './contactsActions';
import { addContact, getContacts, removeContact } from './contactsOperations';

const initialContact = [];

const contactsReducer = createReducer(initialContact, {
  [getContacts.fulfilled]: (_, { payload }) => {
    console.log(payload);
    return payload;
  },
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [removeContact.fulfilled]: (state, { payload }) =>
    state.filter(el => el.id !== payload),
});

const filterReducer = createReducer('', {
  [filterInput]: (_, { payload }) => payload,
});

const isLoadingReducer = createReducer(false, {
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [getContacts.pending]: () => true,
  [getContacts.fulfilled]: () => false,
  [getContacts.rejected]: () => false,
  [removeContact.pending]: () => true,
  [removeContact.fulfilled]: () => false,
  [removeContact.rejected]: () => false,
  [filterReducer.pending]: () => true,
  [filterReducer.fulfilled]: () => false,
  [filterReducer.rejected]: () => false,
});

export const phonebookReducer = combineReducers({
  items: contactsReducer,
  filter: filterReducer,
  isLoading: isLoadingReducer,
});
