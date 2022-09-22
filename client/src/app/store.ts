import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import UserReducer from "../features/counter/counterSlice";
import AuthNavReducer from "../features/authNav/authNavSlice";
import MercadoReducer from '../features/mercadoPagoSlice/mercadoPagoSlice';

export const store = configureStore({
  reducer: {
    user: UserReducer,
    auth: AuthNavReducer,
    mercadopago: MercadoReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
