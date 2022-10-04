import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { exercises } from "../../additional_info/exercises";
import { RootState, AppThunk } from "../../app/store";

export interface State {
  user: null | string | any;
  userToken: null | string | any;
  status: string | undefined;
  rutines: any | null;
  error:string,
  EstadoCuenta: string | null;
  exercises: Array<any> | [];
}

export interface infoRutina {
  token: string;
  form_data: object;
}

const initialState: State = {
  user: null,
  error:"",
  EstadoCuenta:"",
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
      thunkAPI.fulfillWithValue(resp)
      return resp;
    } catch (error: any) {
      thunkAPI.rejectWithValue(error);
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
export const ActivecuentaGoogle = createAsyncThunk(
  "user/activeGoogle",
  async (user: object, thunkAPI) => {

    try {
      const response = await axios.put("http://localhost:3001/accountGoogle", user);
      const resp = response.data;
      thunkAPI.fulfillWithValue(resp);
      return resp;
    } catch (error: any) {
      console.log(error)
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
      
      thunkAPI.fulfillWithValue(response.data);

      return response.data;
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

export const report = createAsyncThunk(
  "user/report",
  async (data: { id:string, email:string,token:string}, thunkAPI) => {
    console.log(data)
    try {
      let headersList = {
        Accept: "*/*",
        Authorization: "Bearer " + data.token,
        "Content-Type": "application/json",
      };

      let reqOptions = {
        url: "http://localhost:3001/auth/report",
        method: "PUT",
        headers: headersList,
        data: { email: data.email, id: data.id },
      };

      let response = await axios.request(reqOptions);

      return response.data;
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
        data,
      };

      let response = await axios.request(reqOptions);
      return thunkAPI.dispatch(Status("success"));
    } catch (error: any) {
      thunkAPI.dispatch(Status(error.response.data));
      return error;
    }
  }
);



export const User_Register_State = createAsyncThunk(
  "user/sing_upUser",
  async (user: object, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:3001/register", user);
      const resp = response.data;
      thunkAPI.fulfillWithValue(resp);
      return resp;
    } catch (error: any) {
      thunkAPI.rejectWithValue(error.response.data);
      return error.response.data;
    }
  }
);

export const User_Login_State = createAsyncThunk(
  "user/login",
  async (user: object, thunkAPI) => {

    try {
      const response = await axios.post("http://localhost:3001/login", user);
      const resp = response.data;
      thunkAPI.fulfillWithValue(resp)
      return resp;
    } catch (error: any) {
      thunkAPI.rejectWithValue(error.response.data);
      return error.response.data;
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
      let resp=response.data
      thunkAPI.fulfillWithValue(resp);
      return resp;

    } catch (error:any) {
      thunkAPI.dispatch(Status(error.response.data))
      thunkAPI.rejectWithValue(error.response.data);
      return error.response.data
    }
  }
);

const feedbackFooter = createAsyncThunk("user/feedbackFooter", async (data) => {
  /* await axios.put() */
})


export const StateSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    Rutines: (state, action: PayloadAction<any>) => {
    
      state.rutines = action.payload;
    },

    Exercises: (state, action: PayloadAction<[]>) => {
      state.exercises = action.payload;
    },

    sigendOut: (state, action: PayloadAction<null>) => {
      window.localStorage.removeItem("Login_userFit_Focus");
      state.user = action.payload;
    },
    Estado:(state, action: PayloadAction<string>) => {
        state.EstadoCuenta=action.payload
    },
    Status: (state, action: PayloadAction<string  |undefined>) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
    //sing

      .addCase(User_Register_State.pending, (state) => {
        state.status = "log";
      })
      .addCase(User_Register_State.rejected, (state,action) => {
        state.status = action.error.message ;
      })
      .addCase(User_Register_State.fulfilled, (state,action) => {
        state.status = "none";
        console.log(action)
        if (typeof action.payload ==="string") {
          state.error=action.payload
        }else{
          state.user=action.payload;
        }
      })
    ///login

      .addCase(User_Login_State.pending, (state) => {
        state.status = "log";
      })
      .addCase(User_Login_State.rejected, (state, action) => {
        state.status = action.error.message;
      })
      .addCase(User_Login_State.fulfilled, (state,action) => {
        state.status = "none";
        console.log(action);
        if (action.payload.length < 50) {
          state.error=action.payload
        }else{
          state.userToken=action.payload;
        }
      })
      //Ejecicios

      .addCase(Exercises_Get.pending, (state) => {
        state.status = "log";
      })
      .addCase(Exercises_Get.rejected, (state) => {
        state.status = "erro";
      })
      .addCase(Exercises_Get.fulfilled, (state,action) => {
          state.status = "none";
          state.exercises=action.payload;
      })
      // //getProfileInfo

      .addCase(getProfileInfo.pending, (state) => {
        state.status = "log";
      })
      .addCase(getProfileInfo.rejected, (state) => {
        state.status = "erro";
      })
      .addCase(getProfileInfo.fulfilled, (state,action) => {
          state.status = "none";
          state.user=action.payload;
      })
      // //activeCuenta

      .addCase(Activecuenta.pending, (state) => {
        state.status = "log";
      })
      .addCase(Activecuenta.rejected, (state) => {
        state.status = "erro";
      })
      .addCase(Activecuenta.fulfilled, (state,action) => {
          state.status = "none";
          state.EstadoCuenta="none"
      })

      .addCase(ActivecuentaGoogle.pending, (state) => {
        state.status = "log";
      })
      .addCase(ActivecuentaGoogle.rejected, (state) => {
        state.status = "erro";
      })
      .addCase(ActivecuentaGoogle.fulfilled, (state,action) => {
          state.status = "none";
          state.EstadoCuenta="none"

      })
      // //edit perfil

      .addCase(EditUser.pending, (state, action) => {
        state.status = "log";
      })
      .addCase(EditUser.rejected, (state, action) => {
        state.status = "error";
      })
      .addCase(EditUser.fulfilled, (state, action) => {
          state.status = "none";
      })
      // //GoogleAuth

      .addCase(authGoogle.pending, (state, action) => {
        state.status = "log";
      })
      .addCase(authGoogle.rejected, (state, action) => {
        
        state.status = "error"+action.error.message;
      })
      .addCase(authGoogle.fulfilled, (state, action) => {
        state.status = "none";
        state.userToken = action.payload;
      })

      // //rutinas

      .addCase(Rutines_Get.pending, (state) => {
        state.status = "log";
      })
      .addCase(Rutines_Get.rejected, (state) => {
        state.status = "error";
      })
      .addCase(Rutines_Get.fulfilled, (state, action) => {
          state.status = "none";
          state.rutines=action.payload;
      })
      ///ifo extrad del user
      .addCase(infoUserRutina.pending, (state) => {
        state.status = "log";
      })
      .addCase(infoUserRutina.rejected, (state) => {
        state.status = "error";
      })
      .addCase(infoUserRutina.fulfilled, (state, action) => {
          state.status = "none";
          state.rutines=action.payload;
      })
      //rewind ejec 
      .addCase(rewindExercise.pending, (state) => {
        state.status = "log";
      })
      .addCase(rewindExercise.rejected, (state) => {
        state.status = "error";
      })
      .addCase(rewindExercise.fulfilled, (state, action) => {
          state.status = "none";
      })

  },
});

export const {  sigendOut, Status, Estado,Rutines, Exercises } =
  StateSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default StateSlice.reducer;
