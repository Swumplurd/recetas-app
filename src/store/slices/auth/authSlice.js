import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  checking: true,
  name: '',
  uid: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.checking = false;
      state.name = action.payload.name
      state.uid = action.payload.uid
    },
    logout: (state) => {
      state = initialState
    }
  },
});

export const { login, logout } = authSlice.actions;