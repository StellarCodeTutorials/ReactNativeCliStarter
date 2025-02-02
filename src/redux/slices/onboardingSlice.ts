import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isFirstLauched: false,
};

export const OnBoardingSlice = createSlice({
  name: 'onboarding',
  initialState: initialState,
  reducers: {
    onboardingReducer: () => {
      return {...initialState, ...{isFirstLauched: true}};
    },
    resetToInitialState: () => {
      return initialState;
    },
  },
});

export const {onboardingReducer, resetToInitialState} = OnBoardingSlice.actions;
export default OnBoardingSlice.reducer;
