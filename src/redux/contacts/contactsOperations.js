import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContactsApi, postContactsApi, removeContactApi } from 'api';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkApi) => {
    try {
      const contacts = await getContactsApi();
      return contacts;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contact/addContact',
  async (contact, thunkApi) => {
    try {
      const newContact = await postContactsApi({ contact });
      return newContact;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (id, thunkApi) => {
    try {
      await removeContactApi({id});
      return id;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
