// src/redux/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import exampleReducer from './slices/exampleSlice';
import onboardingReducer from './slices/onboardingSlice';

const rootReducer = combineReducers({
  example: exampleReducer,
  onboarding: onboardingReducer,
});

export default rootReducer;
