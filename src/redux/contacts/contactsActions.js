import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction('contact/addContact', dataForm => {
  return {
    payload: { ...dataForm, id: nanoid() },
  };
});
export const filterInput = createAction('contacts/filterInput', e => {
  return {
    payload: e.target.value,
  };
});
export const removeContact = createAction('contacts/removeContact');

export const getContacts = createAction('contacts/getContacts');
