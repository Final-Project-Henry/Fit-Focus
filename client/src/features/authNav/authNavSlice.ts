import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//solo los componentes llevan tsx

interface AuthState {
  isLogged: boolean;
}

const initialState: AuthState = {
  isLogged: true,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction) => {
      state.isLogged = true;
    },
    logout: (state, action: PayloadAction) => {
      state.isLogged = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
