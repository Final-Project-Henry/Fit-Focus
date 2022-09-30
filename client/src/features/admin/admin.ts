import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../app/store';

export interface State {
    user_status: string,
    users: Array<any> | null,
}

const initialState: State = {
    user_status: "default",
    users: [],
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
    console.log(token);

    const response = await axios.get("http://localhost:3001/admin/allusers", {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    return response.data;
});
export const add_admin = createAsyncThunk('admin/add_admin', async (_id:string, thunkAPI) => {

    let userJSON = window.localStorage.getItem("Login_userFit_Focus");
    let token;
    if (userJSON) {
        if (userJSON.length > 3) {
            let userlogin = JSON.parse(userJSON);
            token = userlogin.token;
        }
    }
    console.log(token);

    const response = await axios.post("http://localhost:3001/superAdmin/admin",{_id:_id}, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    return response.data;
});

export const AdminSlice = createSlice({
    name: 'admin',
    initialState,

    reducers: {},

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
    }
});

export const { } = AdminSlice.actions;
export const mercadopago = (state: RootState) => state.mercadopago;

export default AdminSlice.reducer;