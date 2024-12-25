import { configureStore } from '@reduxjs/toolkit';
import userReducer from './src/Features/user/userSlice';
import cartReducer from './src/Features/cart/cartSlice';
const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
