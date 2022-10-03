import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../app/store';

export interface State {
    user_status: string,
    users: Array<any> | null,
    load_exer: string,
    delete_exer: string,
    delete_user:string,
}
export interface data {
    name: string;
    difficulty: string;
    muscles: string;
    genre: string;
    premium: boolean;
    video: string;
    description: string;
}

const initialState: State = {
    user_status: "default",
    users: [],
    load_exer: 'default',
    delete_exer: 'default',
    delete_user: 'default'
};

export const get_users = createAsyncThunk('admin/get_users', async (_, thunkAPI) => {

    let userJSON = window.localStorage.getItem("Login_userFit_Focus");
    let token;
    if (userJSON) {
        if (userJSON.length > 3) {
            let userlogin = JSON.parse(userJSON);
            token = userlogin.token;
        }
    }
    const response = await axios.get("http://localhost:3001/admin/allusers", {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    return response.data;
});
export const add_admin = createAsyncThunk('admin/add_admin', async (_id: string, thunkAPI) => {

    let userJSON = window.localStorage.getItem("Login_userFit_Focus");
    let token;
    if (userJSON) {
        if (userJSON.length > 3) {
            let userlogin = JSON.parse(userJSON);
            token = userlogin.token;
        }
    }
    const response = await axios.post("http://localhost:3001/superAdmin/admin", { _id: _id }, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    return response.data;
});

export const delete_user = createAsyncThunk('admin/delete_user', async (id: string, thunkAPI) => {

    let userJSON = window.localStorage.getItem("Login_userFit_Focus");
    let token;
    if (userJSON) {
        if (userJSON.length > 3) {
            let userlogin = JSON.parse(userJSON);
            token = userlogin.token;
        }
    }
    const response = await axios.delete("http://localhost:3001/admin/deleteUser", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        data: { id: id }
    });
    return response.data;
});

export const add_exercise = createAsyncThunk('admin/add_exercise', async (data: data, thunkAPI) => {

    let userJSON = window.localStorage.getItem("Login_userFit_Focus");
    let token;
    if (userJSON) {
        if (userJSON.length > 3) {
            let userlogin = JSON.parse(userJSON);
            token = userlogin.token;
        }
    }
    const response = await axios.post("http://localhost:3001/admin/addExercise", { datos: data }, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    return response.data;
});

export const delete_exer = createAsyncThunk('admin/delete_exer', async (id: string, thunkAPI) => {

    let userJSON = window.localStorage.getItem("Login_userFit_Focus");
    let token;
    if (userJSON) {
        if (userJSON.length > 3) {
            let userlogin = JSON.parse(userJSON);
            token = userlogin.token;
        }
    }
    const response = await axios.delete("http://localhost:3001/admin/deleteExercise", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        data: { id: id }
    });
    return response.data;
});

export const AdminSlice = createSlice({
    name: 'admin',
    initialState,

    reducers: {
        reset_delete_user(state){
            state.delete_user='default';
        },
        reset_delete_exer(state){
            state.delete_exer='default';
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(get_users.fulfilled, (state, action) => {
                state.user_status = 'loaded';
                state.users = action.payload;
            })
            .addCase(get_users.rejected, (state, action) => {
                state.user_status = 'rejected';
            })
            .addCase(add_admin.fulfilled, (state, action) => {
                state.user_status = 'loaded';
            })
            .addCase(add_admin.rejected, (state, action) => {
                state.user_status = 'rejected';
            })
            .addCase(add_exercise.fulfilled, (state, action) => {
                state.load_exer = 'loaded';
            })
            .addCase(add_exercise.rejected, (state, action) => {
                state.load_exer = 'rejected';
            })
            .addCase(delete_exer.fulfilled, (state, action) => {
                state.delete_exer = 'deleted';
            })
            .addCase(delete_exer.rejected, (state, action) => {
                state.delete_exer = 'rejected';
            })
            .addCase(delete_user.fulfilled, (state, action) => {
                state.delete_user = 'deleted';
            })
            .addCase(delete_user.rejected, (state, action) => {
                state.delete_user = 'rejected';
            })
    }
});

export const { reset_delete_user, reset_delete_exer} = AdminSlice.actions;
export const admin = (state: RootState) => state.admin;

export default AdminSlice.reducer;