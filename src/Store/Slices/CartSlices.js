import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    cartOpen: false
};

const cartSlices = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        toggleCart(state, action) {
            state.cartOpen = action.payload;
        },

        addItem(state, action) {
            const newIid = action.payload.id;
            const exItem = state.cartItems.find(item => item.id === newIid);

            if (exItem) {
                exItem.quantity++;
            } else {
                state.cartItems.push(action.payload);
            }
        },

        removeItem(state, action) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },

        incrementItem(state, action) {
            state.cartItems = state.cartItems.map(item => {
                if (item.id === action.payload) {
                    item.quantity++;
                }
                return item;
            });
        },

        decrementItem(state, action) {
            state.cartItems = state.cartItems.map(item => {
                if (item.id === action.payload) {
                    item.quantity--;
                }
                return item;
            })
                .filter(item => item.quantity !== 0);
        }

    }

});

export const { addItem, toggleCart, removeItem, incrementItem, decrementItem, } = cartSlices.actions;
export default cartSlices.reducer;