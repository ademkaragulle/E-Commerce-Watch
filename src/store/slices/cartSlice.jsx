import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if (existingItem) {
                // Eğer ürün zaten sepette varsa sadece miktarı artır   
                existingItem.quantity++;
            } else {
                // Eğer ürün sepette yoksa, yeni ürünü ekleyin
                state.items.push({ ...newItem, quantity: 1 });
            }
        },
        removeFromCart(state, action) {
            const itemId = action.payload;
            state.items = state.items.filter(item => item.id !== itemId);
        },
        increaseQuantity(state, action) {
            const itemId = action.payload;
            const selectedItem = state.items.find(item => item.id === itemId);
            if (selectedItem) {
                selectedItem.quantity++;
            }
        },
        decreaseQuantity(state, action) {
            const itemId = action.payload;
            const selectedItem = state.items.find(item => item.id === itemId);
            if (selectedItem) {
                selectedItem.quantity--;
                if (selectedItem.quantity === 0) {
                    state.items = state.items.filter(item => item.id !== itemId);
                }
            }
        },
        clearCart(state) {
            state.items = [];
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
} = cartSlice.actions;

export const getCartItems = state => state.cart.items;

export const getcartReducer = cartSlice.reducer;
