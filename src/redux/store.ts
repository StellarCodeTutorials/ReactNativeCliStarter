// src/redux/store.ts
import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './rootReducer';
import {logger} from 'redux-logger';

// Persist configuration
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
  //   whitelist: ['example'], // Persist only the 'example' slice
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  //   middleware: [thunk] as Middleware[],
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, // Prevent serialization issues with redux-persist
    }).concat(logger),
});

export const persistor = persistStore(store);

// Types for dispatch and state
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
