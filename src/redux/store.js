import { configureStore } from '@reduxjs/toolkit';
import { phonebookReducer } from './contacts/contactsReducer';

const store = configureStore({
  reducer: {
    contacts: phonebookReducer, // contactsPersistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      // serializableCheck: {
      //   ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      // },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
