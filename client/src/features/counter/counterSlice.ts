import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState, AppThunk } from '../../app/store';

export interface State {
  user: object|null;
  status :object;
}

const initialState: State = {
  user: null,
  status : {}
};

export const User_Register_State = createAsyncThunk(
  'user/sing_upUser',
  async (user:object ,thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:3001/register",user);
      const resp=response.data
      thunkAPI.dispatch(post(resp))
      return resp;
    } catch (error) {
      thunkAPI.rejectWithValue(error)
        console.log(error)
    }
  }
);

console.log(User_Register_State)

export const StateSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    User: (state, action: PayloadAction<object>) => {
      state.user=action.payload
    },
    post: (state, action: PayloadAction<object>) => {
      state.status=action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(User_Register_State.pending, (state, action  ) => {
      console.log(action.payload)
      })
      .addCase(User_Register_State.fulfilled, (state, action) => {
        state.status = action.payload;
      })
      .addCase(User_Register_State.rejected, (state,action) => {
        state.status = action.error;
      });
  },
  
});

export const { User,post } = StateSlice.actions;
// export const loadTodos = createAsyncThunk(
//   'loadTodos',
//   async (_, thunkAPI) => {
//     const response = await axios.get('http://todos.com/api', 'delete');
//     thunkAPI.dispatch(actions.loadTodosSuccess(response.data));
//     return response;
//   });

export const selectUser = (state: RootState) => state.user;

export default StateSlice.reducer;
