import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import UserReducer from "../features/counter/counterSlice";
import AuthNavReducer from "../features/authNav/authNavSlice";
import ImageReducer from '../features/ImageSlice/ImageSlice'
import MercadoReducer from '../features/mercadopago/mercadopago';
import AdminReducer from '../features/admin/admin';

export const store = configureStore({
  reducer: {
    user: UserReducer,
    auth: AuthNavReducer,
    image: ImageReducer,
    mercadopago: MercadoReducer,
    admin: AdminReducer,
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
