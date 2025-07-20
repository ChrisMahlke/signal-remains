import {createSlice} from '@reduxjs/toolkit';

import {tours} from '../data/tours';

import type {PayloadAction} from '@reduxjs/toolkit';

interface NavigationState {
  currentStep: number;
  totalSteps: number;
  activeSection: string;
  fontSize: 'small' | 'medium' | 'large';
  darkMode: boolean;
}

const initialState: NavigationState = {
  currentStep: 1,
  totalSteps: tours.length,
  activeSection: 'home',
  fontSize: 'medium',
  darkMode: false,
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = Math.max(
        1,
        Math.min(action.payload, state.totalSteps),
      );
    },
    nextStep: (state) => {
      if (state.currentStep < state.totalSteps) {
        state.currentStep += 1;
      }
    },
    prevStep: (state) => {
      if (state.currentStep > 1) {
        state.currentStep -= 1;
      }
    },
    setActiveSection: (state, action: PayloadAction<string>) => {
      state.activeSection = action.payload;
      if (action.payload === 'home') {
        state.currentStep = 1;
      }
    },
    setFontSize: (
      state,
      action: PayloadAction<'small' | 'medium' | 'large'>,
    ) => {
      state.fontSize = action.payload;
    },
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    resetToHome: (state) => {
      state.currentStep = 1;
      state.activeSection = 'home';
    },
  },
});

export const {
  setCurrentStep,
  nextStep,
  prevStep,
  setActiveSection,
  setFontSize,
  toggleDarkMode,
  resetToHome,
} = navigationSlice.actions;

export default navigationSlice.reducer;
