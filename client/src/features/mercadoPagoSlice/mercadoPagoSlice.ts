import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState, AppThunk } from '../../app/store';

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
    payment: 'default'
};

interface pay {
    token: string,
    id: string | null,
};


export const get_payment = createAsyncThunk('user/get_payment', async (data: (pay), thunkAPI) => {
    console.log(data.token);
    try {
        const response = await axios.get("http://localhost:3001/auth/payment", {
            headers: {
                Authorization: `Bearer ${data.token}`,
            }
        });
        return response.data;
    } catch (error) {
        return error;
    }
}
);
export const verify_payment = createAsyncThunk('user/verify_payment', async (data: (pay), thunkAPI) => {
    console.log(data.token);
    try {
        const response = await axios.get(`http://localhost:3001/auth/confirmation?payment_id=${data.id}`, {
            headers: {
                Authorization: `Bearer ${data.token}`,
            }
        });
        return response.data;
    } catch (error) {
        return error;
    }
}
);


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
                state.payment = 'fulfilled';
                if(action.payload.length>0)state.premium = true;
            })
            .addCase(verify_payment.rejected, (state, action) => {
                state.payment = 'rejected';
            })
    }
});

export const { } = StateSlice.actions;
export const mercadopago = (state: RootState) => state.mercadopago;

export default StateSlice.reducer;