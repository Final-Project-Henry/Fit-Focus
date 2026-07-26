import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { http } from '@/shared/api/http';
import { RootState } from '@/app/store';
import { getProfileInfo } from '@/features/user/userSlice';

export interface State {
  status: string | null;
  id: string;
  checkoutUrl: string;
  premium: boolean;
  payment: string | null;
}

const initialState: State = {
  status: 'default',
  id: '',
  checkoutUrl: '',
  premium: false,
  payment: 'pending',
};

interface pay {
  token: string;
  id: string | null;
}

export const get_payment = createAsyncThunk(
  'user/get_payment',
  async (data: pay) => {
    const response = await http.get('/auth/payment', {
      headers: {
        Authorization: `Bearer ${data.token}`,
      },
    });
    return response.data;
  },
);

export const verify_payment = createAsyncThunk(
  'user/verify_payment',
  async (data: pay, thunkAPI) => {
    const response = await http.get(
      `/auth/confirmation?payment_id=${data.id}`,
      {
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      },
    );
    await thunkAPI.dispatch(getProfileInfo(data.token));
    return response.data;
  },
);

/** Activates premium when MP did not redirect back with payment_id (typical on localhost). */
export const sync_payment = createAsyncThunk(
  'user/sync_payment',
  async (token: string, thunkAPI) => {
    const response = await http.get('/auth/payment/sync', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    await thunkAPI.dispatch(getProfileInfo(token));
    return response.data;
  },
);

export const StateSlice = createSlice({
  name: 'mercadopago',
  initialState,
  reducers: {
    resetPaymentState(state) {
      state.payment = 'pending';
      state.premium = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(get_payment.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.id = action.payload.id;
        state.checkoutUrl =
          action.payload.checkout_url ||
          action.payload.sandbox_init_point ||
          action.payload.init_point ||
          '';
      })
      .addCase(get_payment.rejected, (state) => {
        state.status = 'rejected';
        state.checkoutUrl = '';
      })
      .addCase(verify_payment.fulfilled, (state) => {
        state.premium = true;
        state.payment = 'fulfilled';
      })
      .addCase(verify_payment.rejected, (state) => {
        state.payment = 'rejected';
      })
      .addCase(sync_payment.pending, (state) => {
        state.payment = 'pending';
      })
      .addCase(sync_payment.fulfilled, (state) => {
        state.premium = true;
        state.payment = 'fulfilled';
      })
      .addCase(sync_payment.rejected, (state) => {
        state.payment = 'rejected';
      });
  },
});

export const { resetPaymentState } = StateSlice.actions;
export const mercadopago = (state: RootState) => state.mercadopago;

export default StateSlice.reducer;
