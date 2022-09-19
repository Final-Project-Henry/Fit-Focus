import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState, AppThunk } from '../../app/store';

export interface State {
  user: null | string;

  status: string | null;

}

const initialState: State = {
  user: null,
  status: "none"
};

export const User_Register_State = createAsyncThunk(
  'user/sing_upUser',
  async (user: object, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:3001/register", user);
      const resp = response.data
      thunkAPI.dispatch(User(resp))
      return resp;
    } catch (error: any) {
      thunkAPI.dispatch(status(error.response.data))
      thunkAPI.rejectWithValue(error)
      return
    }
  }
);

export const User_Login_State = createAsyncThunk(
  'user/login',
  async (user: object, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:3001/login", user);
      const resp = response.data
      console.log(response);

      thunkAPI.dispatch(User(resp))
      return resp;
    } catch (error: any) {
      thunkAPI.dispatch(status(error.response.data))
      thunkAPI.rejectWithValue(error.response.data)

      return
    }
  }
);
export const auth_Login_Google = createAsyncThunk(
  'user/auth_google',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:3001/login/google");
      const resp = response.data
      thunkAPI.dispatch(User(resp))
      return resp;
    } catch (error) {
      return
    }
  }
);

export const authGoogle = createAsyncThunk('user/auth_google', async (code: {code:String}, thunkAPI) => {
    console.log(code);
    try {
      const response = await axios.post("http://localhost:3001/authGoogle",code );
      return response.data;
    } catch (error) {
      return
    }
  }
);

export const StateSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    User: (state, action: PayloadAction<string>) => {
      state.status = "none"
      state.user = action.payload
    },
    sigendOut: (state, action: PayloadAction<null>) => {
      state.status = "none"

      window.localStorage.removeItem("Login_userFit_Focus");

      state.user = action.payload
    },
    status: (state, action: PayloadAction<string>) => {
      console.log(action.payload)
      state.status = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(User_Register_State.pending, (state) => {
        state.status = null
      })

      .addCase(User_Login_State.pending, (state, action) => {
        console.log("pending", action)
        state.status = null
      })

      .addCase(authGoogle.pending, (state, action) => {
        console.log("pending", action.payload);
      })
      .addCase(authGoogle.fulfilled, (state, action) => {
        console.log("fulfilled", action.payload);
        state.status= "load";
        state.user = action.payload;
      })
  },

});

export const { User, sigendOut, status } = StateSlice.actions;


export const selectUser = (state: RootState) => state.user;

export default StateSlice.reducer;

