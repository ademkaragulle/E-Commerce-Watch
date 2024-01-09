import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addToFavorite = createAsyncThunk("addToFavorite", async (product) => {
    const response = await axios.get(`http://localhost:3000/favorites`)
    let data = await response.data
    const existingProduct = await data.find(item => item.id === product.id);
    if (!existingProduct) {
        await axios.post('http://localhost:3000/favorites', product)
            .catch(error => {
                console.error('İstek hatası:', error);
            });
    } else {
        await axios.delete(`http://localhost:3000/favorites/${product.id}`)
            .catch(error => {
                console.error('Silme hatası:', error);
            })
    }
    getFavorite(product.CurrentId)
})

export const getFavorite = createAsyncThunk("getFavorite", async (CurrentUserId) => {
    if (CurrentUserId != null) {
        const response = await axios.get(`http://localhost:3000/favorites`)
        const filteredFav = await response.data.filter(x => x.currentUser == CurrentUserId)
        const data = await filteredFav
        return data
    } else {
        return null
    }
})

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        favoriteItems: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getFavorite.fulfilled, (state, action) => {
            state.favoriteItems = action.payload
        })
    }
});


export const getfavoriteReducer = favoriteSlice.reducer;
