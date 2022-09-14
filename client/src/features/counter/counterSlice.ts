import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState, AppThunk } from '../../app/store';

export interface State {
  user: object|null;

  status :object|string;

}

const initialState: State = {
  user: null,

  status :""
};

export const User_Register_State = createAsyncThunk(
  'user/sing_upUser',
  async (user:object ,thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:3001/register",user);
      const resp=response.data
      thunkAPI.dispatch(User(resp))
      return resp;
    } catch (error) {
      thunkAPI.rejectWithValue(error)
      return
    }
  }
);
export const User_Login_State = createAsyncThunk(
  'user/login',
  async (user:object ,thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:3001/login",user);
      const resp=response.data
      thunkAPI.dispatch(User(resp))
      return resp;
    } catch (error) {
      thunkAPI.rejectWithValue(error)
      return
    }
   }
);

export const StateSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    User: (state, action: PayloadAction<object>) => {
      state.user=action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(User_Register_State.pending, (state) => {
        state.status="panding"
      })
      .addCase(User_Register_State.fulfilled, (state, action) => {
        state.status = action.payload;
      })
      .addCase(User_Register_State.rejected, (state,action) => {
        state.status = action.error;
      })

      .addCase(User_Login_State.pending, (state) => {
        state.status="panding"
      })
      .addCase(User_Login_State.fulfilled, (state, action) => {
        console.log(action.payload)

        state.status = action.payload;
      })
      .addCase(User_Login_State.rejected, (state,action) => {
        console.log(action.payload)
        state.status = action.error;
      });
  },
});

export const { User } = StateSlice.actions;


export const selectUser = (state: RootState) => state.user;

export default StateSlice.reducer;
