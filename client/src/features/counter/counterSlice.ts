import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { exercises } from "../../additional_info/exercises";
import { RootState, AppThunk } from "../../app/store";

export interface State {
  user: null | string | any;
  userToken: null | string | any;
  status: string | null;
  rutines: any | null;
  exercises: Array<any> | [];
}

export interface infoRutina {
  token: string;
  form_data: object;
}

const initialState: State = {
  user: null,
  userToken: null,
  status: "none",
  rutines: {},
  exercises: [],
};

export interface userFeedback {
  email: string;
  comment: string;
  token: string;
}

export const Rutines_Get = createAsyncThunk(
  "user/rutinesSlice",
  async (token: string, thunkAPI) => {
    try {
      let headersList = {
        Accept: "/",
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      };

      let reqOptions = {
        url: "http://localhost:3001/auth/getroutine",
        method: "GET",
        headers: headersList,
      };

      let response = await axios.request(reqOptions);
      const resp = response.data;

      console.log(resp.data);
      thunkAPI.dispatch(Rutines(resp));
      return resp;
    } catch (error: any) {
      thunkAPI.dispatch(Status(error.response.data));
      thunkAPI.rejectWithValue(error);
      return;
    }
  }
);

export const EditUser = createAsyncThunk(
  "user/Edit",
  async ({ token, data }: any, thunkAPI) => {
    thunkAPI.dispatch(Status("none"));

    try {
      let headersList = {
        Accept: "/",
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      };

      let reqOptions = {
        url: `http://localhost:3001/auth/changeinfo`,
        method: "PUT",
        headers: headersList,
        data: data,
      };

      let response = await axios.request(reqOptions);
      const resp = response.data;

      thunkAPI.dispatch(Status(response.data));
  

      return resp;
    } catch (error: any) {
      thunkAPI.dispatch(Status(error.response.data));
      thunkAPI.rejectWithValue(error);
      return;
    }
  }
);

export const Exercises_Get = createAsyncThunk(
  "user/exercices",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:3001/exercises");
      const resp = response.data;
      thunkAPI.dispatch(Exercises(resp));
      return resp;
    } catch (error: any) {
      thunkAPI.dispatch(Status(error.response.data));
      thunkAPI.rejectWithValue(error);
      return;
    }
  }
);

export const User_Register_State = createAsyncThunk(
  "user/sing_upUser",
  async (user: object, thunkAPI) => {
    thunkAPI.dispatch(Status("none"));

    try {
      const response = await axios.post("http://localhost:3001/register", user);
      const resp = response.data;
      thunkAPI.dispatch(User(resp));
      return resp;
    } catch (error: any) {
      thunkAPI.dispatch(Status(error.response.data));
      thunkAPI.rejectWithValue(error);
      return;
    }
  }
);

export const User_Login_State = createAsyncThunk(
  "user/login",
  async (user: object, thunkAPI) => {
    thunkAPI.dispatch(Status("none"));

    try {
      const response = await axios.post("http://localhost:3001/login", user);
      const resp = response.data;

      thunkAPI.dispatch(UserToken(resp));
      thunkAPI.dispatch(Status(resp));

      return resp;
    } catch (error: any) {
      thunkAPI.dispatch(Status(error.response.data));
      thunkAPI.rejectWithValue(error.response.data);
      return;
    }
  }
);
export const Activecuenta = createAsyncThunk(
  "user/active",
  async (user: object, thunkAPI) => {
    thunkAPI.dispatch(Status("none"));

    try {
      const response = await axios.put("http://localhost:3001/account", user);
      const resp = response.data;
      thunkAPI.dispatch(Status(resp));
    
      return resp;
    } catch (error: any) {
      thunkAPI.dispatch(Status(error.response.data));
      return;
    }
  }
);

export const removeAccount = createAsyncThunk(
  "user/remove",
  async (tokenUser: string, thunkAPI) => {
    try {
      let headersList = {
        Accept: "*/*",
        Authorization: "Bearer " + tokenUser,
        "Content-Type": "application/json",
      };

      let userData = jwtDecode(tokenUser);

      let reqOptions = {
        url: "http://localhost:3001/auth/delete",
        method: "delete",
        headers: headersList,
        data: userData,
      };

      let response = await axios.request(reqOptions);

      return response.data;
    } catch (error: any) {
      return error;
    }
  }
);

export const getProfileInfo = createAsyncThunk(
  "user/getProfileInfo",
  async (tokenUser: string, thunkAPI) => {
    try {
      let headersList = {
        Accept: "*/*",
        Authorization: "Bearer " + tokenUser,
        "Content-Type": "application/json",
      };

      let userData = jwtDecode(tokenUser);

      let reqOptions = {
        url: "http://localhost:3001/auth/profile",
        method: "GET",
        headers: headersList,
        data: userData,
      };

      let response = await axios.request(reqOptions);
      thunkAPI.dispatch(User(response.data));

      return;
    } catch (error: any) {
      return error;
    }
  }
);

export const infoUserRutina = createAsyncThunk(
  "user/DataRutinas",
  async (data: infoRutina, thunkAPI) => {
    try {
      let headersList = {
        Accept: "*/*",
        Authorization: "Bearer " + data.token,
        "Content-Type": "application/json",
      };

      let reqOptions = {
        url: "http://localhost:3001/auth/userinfo",
        method: "PUT",
        headers: headersList,
        data: data.form_data,
      };

      let response = await axios.request(reqOptions);
      thunkAPI.dispatch(Status("success"));
      return;
    } catch (error: any) {
      thunkAPI.dispatch(Status(error.response.data));

      return error;
    }
  }
);

export const userFeedback = createAsyncThunk(
  "user/feedback",
  async (data: userFeedback, thunkAPI) => {
    console.log(data);
    try {
      let headersList = {
        Accept: "*/*",
        Authorization: "Bearer " + data.token,
        "Content-Type": "application/json",
      };

      let reqOptions = {
        url: "http://localhost:3001/auth/userfeedback",
        method: "PUT",
        headers: headersList,
        data: { email: data.email, comment: data.comment },
      };

      let response = await axios.request(reqOptions);
      thunkAPI.dispatch(Status("success"));
      return;
    } catch (error: any) {
      thunkAPI.dispatch(Status(error.response.data));
      return error;
    }
  }
);

export const rewindExercise = createAsyncThunk(
  "user/rewind",
  async (data: any, thunkAPI) => {
    try {
      let headersList = {
        Accept: "*/*",
        Authorization: "Bearer " + data.token,
        "Content-Type": "application/json",
      };
      let reqOptions = {
        url: "http://localhost:3001/auth/feedbackExercise",
        method: "PUT",
        headers: headersList,
        data: data,
      };

      let response = await axios.request(reqOptions);
      console.log(response);
      thunkAPI.dispatch(Status("success"));
      return;
    } catch (error: any) {
      thunkAPI.dispatch(Status(error.response.data));
      return error;
    }
  }
);

export const authGoogle = createAsyncThunk(
  "user/auth_google",
  async (code: { code: String }, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/authGoogle",
        code
      );
      return response.data;
    } catch (error) {
      return;
    }
  }
);



export const StateSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    Rutines: (state, action: PayloadAction<any>) => {
      state.status = "none";
      state.rutines = action.payload;
    },

    Exercises: (state, action: PayloadAction<[]>) => {
      state.exercises = action.payload;
    },

    UserToken: (state, action: PayloadAction<string>) => {
      state.userToken = action.payload;
    },
    User: (state, action: PayloadAction<object>) => {
      state.status = "none";
      state.user = action.payload;
    },
    sigendOut: (state, action: PayloadAction<null>) => {
      state.status = "none";
      window.localStorage.removeItem("Login_userFit_Focus");
      state.user = action.payload;
    },
    Status: (state, action: PayloadAction<string  |null>) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(User_Register_State.pending, (state) => {
        state.status = "none";
      })

      .addCase(User_Login_State.pending, (state, action) => {
        state.status = "log";
      })
      .addCase(User_Login_State.fulfilled, (state, action) => {
        state.status = "none";
      })
      .addCase(EditUser.pending, (state, action) => {
        state.status = "log";
      })
      .addCase(EditUser.fulfilled, (state, action) => {
        state.status = "none";
      })
      .addCase(authGoogle.pending, (state, action) => {})
      .addCase(authGoogle.fulfilled, (state, action) => {
        state.status = "none";
        state.userToken = action.payload;
      });
  },
});

export const { User, sigendOut, Status, Rutines, UserToken, Exercises } =
  StateSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default StateSlice.reducer;
