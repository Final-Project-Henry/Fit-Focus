import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../app/store';

export interface State {
    status: string | null,
    id: string,
    premium: boolean,
    payment: string | null
}

const initialState: State = {
    status: "default",
    id: '',
    premium: false,
    payment: 'pending'
};

interface pay {
    token: string,
    id: string | null,
};


export const get_payment = createAsyncThunk('user/get_payment', async (data: (pay), thunkAPI) => {
        const response = await axios.get("http://localhost:3001/auth/payment", {
            headers: {
                Authorization: `Bearer ${data.token}`,
            }
        });
        return response.data;
}
);
export const verify_payment = createAsyncThunk('user/verify_payment', async (data: (pay), thunkAPI) => {

    const response = await axios.get(`http://localhost:3001/auth/confirmation?payment_id=${data.id}`, {
        headers: {
            Authorization: `Bearer ${data.token}`,
        }
    });
    return await response.data;
});


export const StateSlice = createSlice({
    name: 'mercadopago',
    initialState,

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(get_payment.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.id = action.payload.id;
            })
            .addCase(get_payment.rejected, (state) => {
                state.status = 'rejected';
            })
            .addCase(verify_payment.fulfilled, (state, action) => {
                console.log(action);
                state.premium = true;
                state.payment = 'fulfilled';
            })
            .addCase(verify_payment.rejected, (state, action) => {
                console.log(action);
                state.payment = 'rejected';
            })

    }
});

export const { } = StateSlice.actions;
export const mercadopago = (state: RootState) => state.mercadopago;

export default StateSlice.reducer;