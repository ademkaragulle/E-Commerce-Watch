import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./slices/productSlice";
import { getcartReducer } from "./slices/cartSlice";
import { getfavoriteReducer } from "./slices/favoriteSlices";
import { getUserReducer } from "./slices/userSlice";


export const store = configureStore
    ({
        reducer: {
            cart: getcartReducer,
            products: productReducer,
            favorite: getfavoriteReducer,
            currentUser: getUserReducer
        }
    })