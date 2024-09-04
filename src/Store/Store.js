import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Slices/CartSlices';


const store = configureStore({
    reducer: {
        cart: cartReducer
    }
});

export default store;