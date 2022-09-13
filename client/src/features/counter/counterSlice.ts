import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface State {
  user: object|null;

}

const initialState: State = {
  user: null,

};

export const StateSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    User: (state, action: PayloadAction<object>) => {
      state.user=action.payload

    },
    
  },
  
});

export const { User } = StateSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default StateSlice.reducer;
