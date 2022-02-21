import { configureStore } from '@reduxjs/toolkit';
import phonebookReducer from './contacts/contactsReducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const contactsPersistConfig = {
  contacts: {
    contacts: [],
    filter: '',
  },
};

const contactsPersistedReducer = persistReducer(
  contactsPersistConfig,
  phonebookReducer
);

const store = configureStore({
  reducer: {
    contacts: contactsPersistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

export default store;
