import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction('contact/addContact', dataForm => {
  return {
    playload: { ...dataForm, id: nanoid() },
  };
});
export const filterContacts = createAction('contacts/filterContacts', e => {
  return {
    playload: e.target.value,
  };
});
export const removeContact = createAction('contacts/removeContact');
